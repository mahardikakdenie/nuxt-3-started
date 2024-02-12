// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-aos'
  ],
  typescript: {
    typeCheck: true,
    strict: true
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  tailwindcss: {
    exposeConfig: true,
  },
})
