// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  app: {
    baseURL: '/portfolio/',
    buildAssetsDir: 'assets'
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'],
  ssr: true
})
