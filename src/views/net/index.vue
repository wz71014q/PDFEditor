<template>
  <div class="net-root">
    <div class="net-row">
      1
    </div>
    <div class="net-row">
      1
    </div>
    <div class="net-row">
      1
    </div>
    <div class="net-row">
      1
    </div>
    <div class="net-row">
      1
    </div>
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
  grid-auto-columns: minmax(100px, 100px);
  grid-gap: 10px;
  grid-template-rows: repeat(10, 1fr);
  // grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;
}
.net-row {
  border: 1px grid #000;
  background-color: antiquewhite;
}
</style>
