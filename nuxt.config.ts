export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    '@dargmuesli/nuxt-cookie-control',
    '@nuxtjs/i18n',
    'nuxt-schema-org',
    'nuxt-link-checker',
    'nuxt-simple-robots',
    'nuxt-simple-sitemap',
  ],
  cookieControl: {
    barPosition: 'bottom-full',
    closeModalOnClickOutside: true,
  },
  site: {
    url: 'https://anuness.dev/',
    name: 'André Nunes',
    defaultLocale: 'en',
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/config/tailwind.config.ts',
    viewer: true,
  },
  robots: {
    enabled: true,
    allow: ['*'],
  },
  sitemap: {
    enabled: true,
    sitemaps: true,
    autoI18n: true,
    autoLastmod: false,
    hostname: 'https://anuness.dev',
    sitemapName: 'sitemap.xml',
  },
  i18n: {
    baseUrl: 'https://anuness.dev',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en',
    vueI18n: './config/i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'anuness_i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.ts',
      },
      {
        code: 'pt',
        iso: 'pt-BR',
        file: 'pt-BR.ts',
      },
    ],
  }
})
