<template>
  <div>
    <div v-if="!cmdrsAvailable.length">
      <b-button variant="info" @click="connect">Create Interface</b-button>
    </div>
    <div v-else-if="cmdrsAvailable.length && !cmdr">
      <!-- <b-form @submit="connectCmdr"> -->
      <b-form-group
        id="input-group-selected-cmdr-group"
        label="Select CMDR"
        label-for="input-group-selected-cmdr"
      >
        <b-form-select
          id="input-group-selected-cmdr"
          v-model="selectedCmdr"
          :options="cmdrsAvailable"
        ></b-form-select>
      </b-form-group>
      <b-button variant="info" @click="connectCmdr">Connect CMDR</b-button>
      <!-- </b-form> -->
    </div>
    <div v-else>
      <p>
        <strong>Welcome, CMDR {{ cmdr }}!</strong>
      </p>
      <b-button variant="info" @click="fetchShoppingList"
        >Get Shopping List</b-button
      >
      <b-button variant="info" @click="fetchShoppingList"
        >Get Missing Materials</b-button
      >
    </div>
    <div v-if="errors.length">
      <p v-for="error in errors" :key="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    cmdr() {
      return this.$store.state.engineering.edengineerCompanion.cmdr
    },

    cmdrsAvailable() {
      return this.$store.state.engineering.edengineerCompanion.cmdrsAvailable
    },

    selectedCmdr: {
      get() {
        return this.$store.state.engineering.edengineerCompanion.selectedCmdr
      },
      set(cmdr) {
        this.$store.commit(
          'engineering/edengineerCompanion/setSelectedCmdr',
          cmdr
        )
      },
    },

    errors() {
      return this.$store.state.engineering.edengineerCompanion.errors
    },
  },

  methods: {
    calcTheMats() {},

    ...mapActions({
      connect: 'engineering/edengineerCompanion/fetchCmdrs',
      fetchShoppingList: 'engineering/edengineerCompanion/fetchShoppingList',
      connectCmdr: 'engineering/edengineerCompanion/connectCmdr',
    }),
  },
}
</script>
