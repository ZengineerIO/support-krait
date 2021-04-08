<template>
  <b-row>
    <b-col>
      <b-form
        bg-dark
        @submit="
          (e) => {
            e.preventDefault()
          }
        "
      >
        <b-form-group
          id="input-group-startSystem"
          label="Start System:"
          label-for="input-startSystem"
          description="System to start the Journey."
        >
          <b-form-select
            id="input-startSystem"
            v-model="startSystem"
            :options="selectedSystems"
            value-field="system_name"
            text-field="system_name"
          ></b-form-select>
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
          :destinations="selectedSystems"
          :jump-range="jumpRange"
          :loop-route="loopRoute"
          button-text="Systems"
        />
        <!--b-button
          type="submit"
          variant="info"
          :href="routeUrl"
          target="_blank"
          :disabled="selectedSystems.length == 0 || !startSystem"
          >{{
            selectedSystems.length > 0
              ? startSystem
                ? 'Get Route'
                : 'Select Start System'
              : 'Select Systems first'
          }}</b-button
        -->
      </b-form>
    </b-col>
  </b-row>
</template>
<script>
export default {
  computed: {
    loopRoute: {
      get() {
        return this.$store.state.bgs.routeAdvisor.loopRoute
      },
      set(loop) {
        this.$store.commit('bgs/routeAdvisor/setToggleRoute', loop)
      },
    },
    selectedSystems() {
      return this.$store.state.bgs.routeAdvisor.selectedSystems
    },
    jumpRange: {
      get() {
        return this.$store.state.bgs.routeAdvisor.jumpRange
      },
      set(range) {
        this.$store.commit('bgs/routeAdvisor/setJumpRange', range)
      },
    },
    startSystem: {
      get() {
        return this.$store.state.bgs.routeAdvisor.startSystem
      },
      set(system) {
        this.$store.commit('bgs/routeAdvisor/setStartSystem', system)
      },
    },
    routeUrl() {
      const baseUrl = 'https://spansh.co.uk/tourist/results/SUPPORT_KRAIT'

      let destination = '['
      this.$store.state.bgs.routeAdvisor.selectedSystems.forEach(
        (system, i) => {
          if (
            this.$store.state.bgs.routeAdvisor.startSystem !==
            system.system_name
          ) {
            destination += `"${system.system_name}"`
            if (
              i !==
              this.$store.state.bgs.routeAdvisor.selectedSystems.length - 1
            ) {
              destination += ','
            }
          }
        }
      )
      destination += ']'

      return `${baseUrl}?destination=${encodeURIComponent(
        destination
      )}&range=${encodeURIComponent(
        this.$store.state.bgs.routeAdvisor.jumpRange
      )}&source=${encodeURIComponent(
        this.$store.state.bgs.routeAdvisor.startSystem
      )}&loop=${encodeURIComponent(
        Number(this.$store.state.bgs.routeAdvisor.loopRoute)
      )}`
    },
  },
}
</script>
