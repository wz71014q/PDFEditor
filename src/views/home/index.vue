<template>
  <div class="home-root">
    <ul class="pages-wrapper">
      <li
        class="pages"
        v-for="(item, index) in myRoutes"
        :key="index"
        @click="onRouterChange(item)">
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
  methods: {
    onRouterChange (page) {
      if (page.name !== 'Home') {
        this.$router.push({ name: page.name })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home-root {
  width: 100%;
  height: 100%;
}
.pages-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.pages {
  margin: auto;
  cursor: pointer;
}
</style>
