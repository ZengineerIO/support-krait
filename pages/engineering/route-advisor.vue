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
          <EngineeringMaterialSelectionForm />
          <hr />
          <UtilsSpanshRouteForm
            button-text="Engineer"
            :destinations="selectedEngineers"
          />
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
      selectedEngineersFields: [
        'name',
        {
          key: 'system_name',
          label: 'System',
        },
      ],
    }
  },
  computed: {
    selectedEngineers() {
      return this.$store.state.engineering.routeAdvisor.selectedEngineers
    },
  },
  methods: {
    removeEngineer(engineerId) {
      this.$store.commit('engineering/routeAdvisor/removeEngineer', engineerId)
    },
  },
}
</script>
