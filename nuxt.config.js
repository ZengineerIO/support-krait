export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Support Krait',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/custom.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: 'https://zengineerio.github.io/support-krait',

    // Otherwise bootstrap-vue/icons.js would throw a size error
    babel: {
      compact: false,
    },
  },

  router: {
    base: '/support-krait/',
  },

  // strip down bootstrap
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    components: [
      'BContainer',
      'BRow',
      'BCol',
      'BForm',
      'BFormGroup',
      'BFormInput',
      'BFormRadio',
      'BFormSelect',
      'BFormCheckbox',
      'BInputGroup',
      'BInputGroupAppend',
      'BButton',
      'BTable',
      'BCollapse',
      'BDropdownItem',
      'BNavbar',
      'BNavbarBrand',
      'BNavbarToggle',
      'BNavbarNav',
      'BNavItem',
      'BNavItemDropdown',
      'BIcon',
      'BIconGithub',
      'BIconInfoCircle',
      'BCard',
      'BCardBody',
      'BCardGroup',
      'BAlert',
      'BModal',
    ],
    directives: ['VBModal'],
  },
}
