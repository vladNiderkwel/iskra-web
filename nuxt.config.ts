// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [

    '@nuxtjs/tailwindcss',

    '@tailwindcss/typography',
    
    ['@nuxtjs/google-fonts', {
      families: {
        PlayfairDisplay: [400, 500, 700],
        Inter: [400, 500, 700],
        FiraSans: [400, 500, 700],
        Rubik: [400, 500, 700],
      }
    }]

  ]

})
