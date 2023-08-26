// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'TourHub'
    },
    rootId: 'app'
  },
  css: [
    '@/assets/scss/index.scss'
  ],
  routeRules: {
    '/map': {
      ssr: false
    }
  },
  runtimeConfig: {
    public: {
      bingMapsKey: ''
    }
  },
})
