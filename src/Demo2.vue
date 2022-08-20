<template>
  <div class="red">
    {{ message }}
<!--    <button @click="add">+1</button>&lt;!&ndash;写在页面里的视图&ndash;&gt;-->
  </div>
</template>

<script>
export default {
  props:['message']
}
//   data() {
//     return {
//       n: 0
//     }
//   },
//   created() {
//     console.log('出现在内存中，没有出现在页面中')
//   },
//   mounted() {
//     console.log('我已出现在页面中')
//   },
//   updated() {
//     console.log('更新了')
//     console.log(this.n)
//   },
//   destroyed() {
// console.log('从页面中消失了')
//   },
//   methods: {
//     add() {
//       this.n += 1
//     },
//   },
// }
</script>

<style></style>