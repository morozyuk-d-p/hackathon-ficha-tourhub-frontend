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
  plugins: [
    {
      src: '~/plugins/axios.ts',
      mode: 'all'
    }
  ],
  routeRules: {
    '/map': {
      ssr: false
    }
  },
  runtimeConfig: {
    public: {
      apiBase: '',
      bingMapsKey: ''
    }
  },
})
