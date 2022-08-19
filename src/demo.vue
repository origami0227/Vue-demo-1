<template>
  <div class="red">
    {{ n }}
  </div>
  <button @click="add">+1</button><!--写在页面里的视图-->
</template>

<script>
//除了视图的部分
export default {
  data() {
    return {
      n: 0
    }
  },
  methods: {
    add() {
      this.n+=1
    }
  }
}
</script>

<style scoped>
.red{
  color: red;
}
</style>