// import Vue from 'vue'
// import App from './App.vue'
//
const Vue = window.Vue
Vue.config.productionTip = false
//
import Demo2 from './Demo2.vue'

// Vue.component('Demo2', {
//     template:`
//     <div>demo2</div>
//     `
// })
new Vue({
    data: {
        visible: true
    },
    components: {Demo2},
    template: `
        <Demo2 message="你好 props"/>
    `,
    methods: {
        toggle() {
            this.visible = !this.visible
        }
    },
    // render: h => h(Demo2)
}).$mount('#app')
