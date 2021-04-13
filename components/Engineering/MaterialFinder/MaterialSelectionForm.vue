<template>
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
        :options="limitResultsOptions"
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
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      limitResultsOptions: ['5', '10', '15', '20', '25', 'All'],
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
    }),
  },
  methods: {
    ...mapActions({
      getSystemsWithDrops: 'engineering/materialFinder/getSystemsWithDrops',
    }),
  },
}
</script>
