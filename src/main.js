// import Vue from 'vue'
// import App from './App.vue'
//
// Vue.config.productionTip = false
//

new Vue({
    el: '#app',
    render(h) {
        return h('div', [this.n, h('button', {on: {click: this.add}}, '+1')])
    },
    data: {
        n: 0
    },
    methods: {
        add() {
            return this.n += 1
        }
    }
})
console.log(window.Vue)