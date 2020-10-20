import i18n from './i18n'

const baseURL = 'https://localhost:8080'

export default {
  ssr: false,
  head: {
    title: 'Basic',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Nuxt Basic Template' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  server: {
    host: '0.0.0.0',
    port: 80,
  },
  pwa: {
    meta: {
      title: 'Basic Template',
      author: 'Marcelo Velásquez',
      theme_color: '#333',
    },
    manifest: {
      name: 'Basic Template',
      short_name: 'Basic',
      description: 'Nuxt basic template',
      start_url: '/',
      lang: 'es',
      shortcuts: [],
    },
    workbox: {
      enabled: false,
    },
  },
  css: [],
  plugins: ['~/plugins/snackbar.js', '~/plugins/repository.js'],
  loading: { color: '#fff' },
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/device',
    ['nuxt-i18n', i18n],
  ],
  vuetify: { optionsPath: './vuetify.options.js' },
  axios: {
    proxy: false,
    https: true,
    prefix: '/api',
    baseURL,
  },
  proxy: {
    '/api': {
      target: baseURL,
    },
  },
  build: {
    analize: true,
    extractCSS: {
      ignoreOrder: true,
    },
  },
}
