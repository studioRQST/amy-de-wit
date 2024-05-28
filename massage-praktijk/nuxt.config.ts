export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['assets/main.css'],
  
    app: {
      head: {
        htmlAttrs: {
          lang: 'nl',
        },
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Ontdek de kracht van lymfedrainage en sportmassage voor optimaal herstel bij Massagepraktijk Amy de Wit. Laat mij je begeleiden op een reis van herstel en vernieuwing in Hem.'
          },
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
      },
      pageTransition: { name: 'page', mode: 'out-in' }
    },
  
    modules: ["@nuxtjs/sitemap", "@nuxtjs/seo"],
    sitemap: {
      exclude: [
        '/404',
        '/algemene-voorwaarden',
        '/succes-page-form',
      ],
    },
  });