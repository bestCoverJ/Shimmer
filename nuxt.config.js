export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'shimmer',
    htmlAttrs: {
      lang: 'cn'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // { src: '/flexible.js', type: 'text/javascript', charset: 'utf-8' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '@/modify/css/global.less',
    '@/modify/css/fonts.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    { src: '@/plugins/vue-mavon-editor', ssr: false },
    '@/plugins/axios-plugin.js'
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],
  styleResources:{
    less:[
      './modify/css/global.less'
    ]
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    prefix: '/',
    proxy: true,
    credentials: true
  },
  proxy: {
    // '/api/': {
    //   // target: 'http://192.168.0.103:8080',
    //   target: 'http://182.92.157.171:8090/',
    //   changeOrigin: true,
    //   pathRewrite: {
    //     '^/api/': '/api/'
    //   }
    // }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // postcss: [
    //   require('postcss-px2rem')({
    //     remUnit: 50
    //   })
    // ]
  }
}
