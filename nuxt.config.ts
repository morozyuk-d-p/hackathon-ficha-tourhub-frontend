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
  runtimeConfig: {
    public: {
      bingMapsKey: ''
    }
  },
  ssr: false,
})
