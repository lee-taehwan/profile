const pkg = require('./package.json');

export default defineNuxtConfig({
  app: {
    baseURL: '/profile/',

    rootId: 'leetaehwan',

    head: {
      title: '이태환 | 프로필',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: pkg.description },
        {
          hid: 'keywords',
          name: 'keywords',
          content: '이태환, 프로필, 포토폴리오, leetaehwan, profile, portfolio',
        },
      ],
    },
  },

  css: ['@/assets/css/style.css'],

  modules: ['@pinia/nuxt'],

  srcDir: 'src/',
});
