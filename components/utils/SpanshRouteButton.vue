<template>
  <b-button
    type="submit"
    variant="info"
    :href="routeUrl"
    target="_blank"
    :disabled="destinations.length == 0 || !startSystem"
    >{{
      destinations.length > 0
        ? startSystem
          ? 'Get Route'
          : 'Select Start System'
        : `Select ${buttonText} first`
    }}</b-button
  >
</template>

<script>
export default {
  props: {
    startSystem: {
      type: String,
      default: null,
    },
    destinations: {
      type: Array,
      default: () => [],
    },
    jumpRange: {
      type: Number,
      default: () => 50,
    },
    loopRoute: {
      type: Boolean,
      default: () => false,
    },
    buttonText: {
      type: String,
      default: () => 'System',
    },
  },
  computed: {
    routeUrl() {
      const baseUrl = 'https://spansh.co.uk/tourist/results/SUPPORT_KRAIT'

      let destination = '['
      this.destinations.forEach((dest, i) => {
        destination += `"${dest.system_name}"`
        if (i !== this.destinations.length - 1) {
          destination += ','
        }
      })
      destination += ']'

      return `${baseUrl}?destination=${encodeURIComponent(
        destination
      )}&range=${encodeURIComponent(
        this.jumpRange
      )}&source=${encodeURIComponent(
        this.startSystem
      )}&loop=${encodeURIComponent(Number(this.loopRoute))}`
    },
  },
}
</script>
