<template>
  <div>
    <b-row>
      <b-col>
        <h1>Material Finder (ALPHA)</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>
          Get a list of systems where a specific material has been collected
          recently.
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="3">
        <b-card class="my-2" bg-variant="secondary">
          <h2>Material</h2>
          <b-form
            @submit="
              (e) => {
                e.preventDefault()
              }
            "
          >
            <b-form-group
              id="input-group-material-category"
              label="Type"
              label-for="input-material-category"
            >
              <b-form-select
                id="input-material-category"
                v-model="selectedMaterialCategory"
                :options="materialCategories"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              id="input-group-material-grade"
              label="Grade"
              label-for="input-material-grade"
            >
              <b-form-select
                id="input-material-grade"
                v-model="selectedMaterialGrade"
                :options="materialGrades"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              id="input-group-material"
              label="Material"
              label-for="input-material"
            >
              <b-form-select
                id="input-material"
                v-model="selectedMaterial"
                :options="getMaterialsOptions"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              id="input-group-limit-results"
              label="Limit Results"
              label-for="input-limit-results"
            >
              <b-form-select
                id="input-limit-results"
                v-model="limitResults"
                :options="['5', '10', '15', '20', '25', 'All']"
              ></b-form-select>
            </b-form-group>
            <b-button
              :disabled="selectedMaterial == null"
              type="submit"
              variant="info"
              @click="getSystemsWithDrops"
              >Search</b-button
            >
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
              :destinations="getSystems"
              :jump-range="jumpRange"
              :loop-route="loopRoute"
              button-text="Systems"
            />
          </b-form>
        </b-card>
      </b-col>
      <b-col>
        <b-table
          :items="getSystems"
          :fields="[
            {
              key: 'system_name',
              label: 'System - click to copy',
            },
            'count',
          ]"
          responsive="sm"
          striped
          borderless
          dark
          primary-key="id"
          @row-clicked="copySystemName"
        >
        </b-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      startSystem: 'Sol',
      jumpRange: '50',
      loopRoute: false,
    }
  },
  computed: {
    materialCategories() {
      return this.$store.state.engineering.materialFinder.materialCategories
    },
    materialGrades() {
      return this.$store.state.engineering.materialFinder.materialGrades
    },
    selectedMaterialCategory: {
      get() {
        return this.$store.state.engineering.materialFinder
          .selectedMaterialCategory
      },
      set(category) {
        this.$store.commit(
          'engineering/materialFinder/setSelectedMaterialCategory',
          category
        )
      },
    },
    selectedMaterialGrade: {
      get() {
        return this.$store.state.engineering.materialFinder
          .selectedMaterialGrade
      },
      set(grade) {
        this.$store.commit(
          'engineering/materialFinder/setSelectedMaterialGrade',
          grade
        )
      },
    },
    selectedMaterial: {
      get() {
        return this.$store.state.engineering.materialFinder.selectedMaterial
      },
      set(material) {
        this.$store.commit(
          'engineering/materialFinder/setSelectedMaterial',
          material
        )
      },
    },
    limitResults: {
      get() {
        return this.$store.state.engineering.materialFinder.limitResults
      },
      set(limit) {
        this.$store.commit('engineering/materialFinder/setLimitResults', limit)
      },
    },
    ...mapGetters({
      getMaterialsOptions: 'engineering/materialFinder/getMaterialsOptions',
      getSystems: 'engineering/materialFinder/getSystems',
    }),
  },
  methods: {
    copySystemName(system) {
      const copy = document.createElement('input')
      copy.value = system.system_name
      copy.setAttribute('readonly', '')
      copy.style.position = 'absolute'
      copy.style.left = '-9999px'
      document.body.appendChild(copy)
      copy.select()
      document.execCommand('copy')
      document.body.removeChild(copy)
    },
    ...mapActions({
      getSystemsWithDrops: 'engineering/materialFinder/getSystemsWithDrops',
    }),
  },
}
</script>
