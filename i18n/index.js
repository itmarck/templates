export default {
  strategy: 'prefix_and_default',
  locales: [
    {
      code: 'es',
      iso: 'es-ES',
      name: 'Español',
      file: 'es.js',
    },
  ],
  defaultLocale: 'es',
  lazy: true,
  langDir: 'i18n/',
  parsePages: false,
  vuex: {
    moduleName: 'i18n',
    mutations: {
      setLocale: false,
      setMessages: false,
    },
    preserveState: false,
  },
  pages: {},
  vueI18n: {
    fallbackLocale: 'es',
  },
}
