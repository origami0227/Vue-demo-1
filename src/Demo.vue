<template>
  <div>
    <div class="red">
      demo
    </div>

  </div>

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
      this.n += 1
    }
  }
}
</script>

<style scoped>
.red {
  color: red;
}
</style>