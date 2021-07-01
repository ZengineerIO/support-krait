<template>
  <div>
    <img id="error" :src="errorPic" />
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    errorPic() {
      return `https://http.cat/${this.error.statusCode}.jpg`
    },
  },
}
</script>
<style>
#error {
  min-width: 100vw !important;
}
</style>
