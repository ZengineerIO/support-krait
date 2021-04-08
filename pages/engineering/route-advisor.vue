<template>
  <div>
    <b-row>
      <b-col>
        <h1>Engineering Route Advisor (ALPHA)</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>Get a route to apply your experimental effects AQAP</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="3">
        <b-card class="my-2" bg-variant="secondary">
          <h2>Engineers</h2>
          <b-form
            @submit="
              (e) => {
                e.preventDefault()
              }
            "
          >
            <b-form-group
              id="input-group-get-engineer-by"
              label="Get Engineer by"
              label-for="input-get-engineer-by"
            >
              <b-form-select
                id="input-get-engineer-by"
                v-model="getEngineerBy"
                :options="getEngineerByOptions"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              v-if="getEngineerBy === 'Name'"
              id="input-group-selected-engineer"
              label="Select Engineer"
              label-for="input-selected-engineer"
            >
              <b-form-select
                id="input-selected-engineer"
                v-model="selectedEngineer"
                value-field="id"
                text-field="name"
                :options="engineers"
              ></b-form-select>
            </b-form-group>
            <b-button
              variant="info"
              :disabled="!selectedEngineer"
              @click="addEngineer"
              >{{
                selectedEngineer ? 'Add Engineer' : 'Select Engineer'
              }}</b-button
            >
            * Left click on row to remove
          </b-form>
          <hr />
          <b-form
            @submit="
              (e) => {
                e.preventDefault()
              }
            "
          >
            <h2>Route</h2>
            <b-form-group
              id="input-group-startSystem"
              label="Start System:"
              label-for="input-startSystem"
              description="System to start the Journey."
            >
              <b-form-input
                id="input-startSystem"
                v-model="startSystem"
                type="text"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-jumpRange"
              label="Jump range:"
              label-for="input-jumpRange"
              description="Jump range of your current ship."
            >
              <b-form-input
                id="input-jumpRange"
                v-model="jumpRange"
                type="number"
                placeholder="Jump range"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-loopRoute"
              label-for="input-loopRoute"
              description="End the trip in the starting system."
            >
              <b-form-checkbox id="input-loopRoute" v-model="loopRoute"
                >Loop Route</b-form-checkbox
              >
            </b-form-group>
            <UtilsSpanshRouteButton
              :start-system="startSystem"
              :destinations="selectedEngineers"
              :jump-range="jumpRange"
              :loop-route="loopRoute"
              button-text="Engineers"
            />
          </b-form>
        </b-card>
      </b-col>
      <b-col>
        <b-table
          :items="selectedEngineers"
          :fields="selectedEngineersFields"
          responsive="sm"
          striped
          borderless
          dark
          primary-key="id"
          @row-clicked="removeEngineer"
        >
        </b-table>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      getEngineerBy: 'Name',
      getEngineerByOptions: [
        'Name',
        {
          value: 'Module',
          text: 'Module (not yet implemented)',
          disabled: true,
        },
      ],
      selectedEngineersFields: [
        'name',
        {
          key: 'system_name',
          label: 'System',
        },
      ],
      jumpRange: 50,
      loopRoute: false,
      startSystem: null,
    }
  },
  computed: {
    engineers() {
      const source = this.$store.state.engineering.routeAdvisor.engineers
      const engineers = []
      Object.keys(source).forEach((engineer) => {
        engineers.push({ id: engineer, ...source[engineer] })
      })
      return engineers
    },
    selectedEngineer: {
      get() {
        return this.$store.state.engineering.routeAdvisor.selectedEngineer
      },
      set(engineer) {
        this.$store.commit(
          'engineering/routeAdvisor/setSelectedEngineer',
          engineer
        )
      },
    },
    selectedEngineers() {
      return this.$store.state.engineering.routeAdvisor.selectedEngineers
    },
  },
  methods: {
    addEngineer() {
      this.$store.commit('engineering/routeAdvisor/addEngineer')
    },
    removeEngineer(engineerId) {
      this.$store.commit('engineering/routeAdvisor/removeEngineer', engineerId)
    },
  },
}
</script>
