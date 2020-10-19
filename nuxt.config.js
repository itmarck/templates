import i18n from './i18n'

export default {
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
    },
    manifest: {
      name: 'Basic Template',
      short_name: 'Basic',
      lang: 'es',
      description: 'Nuxt basic template',
    },
  },
  css: [],
  plugins: [],
  loading: { color: '#fff' },
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/device',
    ['nuxt-i18n', i18n],
  ],
  toast: { position: 'bottom-right', duration: 5000, keepOnHover: true },
  axios: {},
  build: {
    analize: true,
    extractCSS: {
      ignoreOrder: true,
    },
  },
}
