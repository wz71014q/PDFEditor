<template>
  <div class="net-root"></div>
</template>

<script>
export default {
  name: 'GridNet',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.net-root {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  display: grid;
  grid-gap: 0;
  grid-template-rows: repeat(24, [row-start] 1fr [row-end]);
  grid-template-columns: repeat(24, [col-start] 1fr [col-end]);
  width: 100%;
  height: 100%;
}
</style>
