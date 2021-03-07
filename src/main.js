// index.js
import Vue from 'vue'
import App from './app.vue'

// const root = document.createElement('div')
// document.body.appendChild(root)

// new Vue({
//     render: (h) => h(App)
// }).$mount(root)
new Vue({
    el:'#app',
    components:{
        App: App
    },
    template:"<App/>"
})