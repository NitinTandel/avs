// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["@/public/css/app.css"],
    modules: [
        '@nuxtjs/tailwindcss'
    ],

    app: {
        head : {
            title : 'A. V. Solutions',
            meta : [
                {name : 'description', content : 'Website Development, Web Application Development, Mobile Application Development, Tally Customization, Tally TDL Utilities, Excel to Tally, Excel Automation, Python Automation' }
            ]
        }
    }
})
