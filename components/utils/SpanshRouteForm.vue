<template>
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
      description="System to start the Journey. Leave emtpy to select over at spansh!"
    >
      <b-form-select
        id="input-startSystem"
        v-model="startSystem"
        :options="destinations"
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
      :destinations="destinations"
      :jump-range="jumpRange"
      :loop-route="loopRoute"
      :button-text="buttonText"
    />
  </b-form>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: () => 'System',
    },
    destinations: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    startSystem: {
      get() {
        return this.$store.state.utils.spansh.startSystem
      },
      set(system) {
        this.$store.commit('utils/spansh/setStartSystem', system)
      },
    },
    /* destinations: {
      get() {
        return this.$store.state.utils.spansh.destinations
      },
    }, */
    jumpRange: {
      get() {
        return this.$store.state.utils.spansh.jumpRange
      },
      set(range) {
        this.$store.commit('utils/spansh/setJumpRange', range)
      },
    },
    loopRoute: {
      get() {
        return this.$store.state.utils.spansh.loopRoute
      },
      set(loop) {
        this.$store.commit('utils/spansh/setLoopRoute', loop)
      },
    },
  },
}
</script>
