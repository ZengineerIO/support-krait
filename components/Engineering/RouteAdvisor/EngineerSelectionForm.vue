<template>
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
      >{{ selectedEngineer ? 'Add Engineer' : 'Select Engineer' }}</b-button
    >
    <small>* Left click on row to remove</small>
  </b-form>
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
  },
  methods: {
    addEngineer() {
      this.$store.commit('engineering/routeAdvisor/addEngineer')
    },
  },
}
</script>
