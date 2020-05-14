<template>
  <div class="net-root">
    <div class="net-row"></div>
    <div class="net-row"></div>
    <div class="net-row"></div>
    <div class="net-row"></div>
    <div class="net-row"></div>
    <div class="net-row"></div>
    <div class="net-row"></div>
    <div class="net-row"></div>
    <div class="net-row"></div>
  </div>
</template>

<script>
export default {
  name: 'Net',
  data () {
    return {
      msg: 'root'
    }
  }
}
</script>

<style lang="scss" scoped>
.net-root {
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;
}
.net-row {
  grid-row: 1;
  grid-column: 1 / 3;
}
</style>
