// import Vue from 'vue'
// import App from './App.vue'
//
const Vue = window.Vue
Vue.config.productionTip = false
//
import Demo from './Demo.vue'

Vue.component('Demo2', {
    template:`
    <div>demo2</div>   
    `
})
const vm = new Vue({
    components: {
        Origami: Demo
    },
    data() {
        return {
            n: 0,
            array: [1, 2, 3, 4, 5, 6, 7, 8]
        }
    },
    template: `
      <div>
      <div class="red">
        {{ n }}
      </div>
      <button @click="add">+1</button><!--写在页面里的视图-->
      <Origami/>
      <Demo2/>
      <hr>
      {{ filter() }}<!--求数组的偶数-->
      </div>
    `,
    methods: {
        add() {
            this.n += 1
        },
        filter() {
            return this.array.filter(i => i % 2 === 0)
        }
    }
})
vm.$mount('#app')
