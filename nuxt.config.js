const title = 'Dalibor Gogic - Software/Cloud Engineering and Architecture'
const description = 'DevOops'

export default {
  head: {
    htmlAttrs: { lang: 'en' },
    titleTemplate: `%s - ${title}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-config', content: '/browserconfig.xml' },
      { name: 'theme-color', content: '#FFFFFF' },
      { hid: 'twitter:card', name: 'twitter:card', value: 'summary_large_image' },
      // { hid: 'og:image', property: 'og:image', content: `https://${CMS_DOMAIN}/wp-content/uploads/2018/08/PDS03_01.jpg` },
      // { hid: 'og:image:width', property: 'og:image:width', content: '1680' },
      // { hid: 'og:image:height', property: 'og:image:height', content: '945' },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:url', property: 'og:url', content: `https://daliborgogic.com` }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000' },
      { rel: 'shortcut icon', href: '/favicon.ico' }
    ]
  },

  build: {
    parallel: true,
    extractCSS: false,
    cssSourceMap: false,
    styleResources: {
      stylus: './assets/variables.styl'
    },
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },

  render: {
    resourceHints: false,
    http2: {
      push: true
    }
  }
}
