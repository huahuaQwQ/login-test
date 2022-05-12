export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: '登录注册页面',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'normalize.css/normalize.css',
        'view-design/dist/styles/iview.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/view-ui',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        proxy: true, // 表示开启代理
        prefix: '/api', // 表示给请求url加个前缀 /api
        credentials: true, // 表示跨域请求时是否需要使用凭证
    },
    proxy: {
        "/api": {
            target: "http://linen-fxym4pw0.vaiwan.com",
            changeOrigin: true, // 表示是否跨域
            pathRewrite: {
                '^/api': '', // 把 /api 替换成‘’
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        loaders: {
            less: {
                javascriptEnabled: true
            }


        }
    },
    //关闭遥测数据
    telemetry: false
}