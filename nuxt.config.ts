// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['assets/scss/main.scss'],
  pages: true,
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    // '@nuxt/image',
    // '@nuxt/ui'
  ]
})