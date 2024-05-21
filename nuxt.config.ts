export default defineNuxtConfig({

  app: {
    head: {
      link: [
        { rel: "icon", type: "image/svg", href: "/favicon.svg" }
      ]
    }
  },

  build: {
    transpile: ["vue-yandex-maps"]
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@tailwindcss/typography',
    'vue-yandex-maps/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        Rubik: [400, 500, 700],
      }
    }],
  ],

  yandexMaps: {
    apikey: '31ff77ba-7e24-4497-ba72-ca181cb2938c',
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.API_URL,
      endpoints: {
        signIn: { path: '/login', method: 'post' },
        signOut: { path: '/logout', method: 'post' }
      }
    }
  },

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true
      }
    }
  },
})