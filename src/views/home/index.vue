<template>
  <div class="home-root">
    <ul>
      <li v-for="(item, index) in myRoutes" :key="index">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { routes } from '@/router'

export default {
  name: 'Home',
  data () {
    return {
      myRoutes: routes
    }
  },
  mounted () {
    console.log(routes, this.$router.options.routes)
  }
}
</script>

<style lang="scss" scoped>
.home-root {
  width: 100%;
  height: 100%;
}
</style>
