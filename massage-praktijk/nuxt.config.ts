// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ['assets/main.css'],

    app: {
        head: {
            htmlAttrs: {
                lang: 'nl',
            },
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
            ]
        },
        pageTransition: {name: 'page', mode: 'out-in'}
    },

    modules: ["@nuxtjs/sitemap",
        ['nuxt-gtag', { id: 'G-CD01818L2J' }],
    ],
    sitemap: {
        exclude: [
            '/404',
            '/algemene-voorwaarden',
            '/succes-page-form',
        ],
    },
})