<template>
  <div id="app">
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  font-size: 20px;
}
.slide-enter-active {
  animation: slide-in 0.3s ease;
}
.slide-leave-active {
  animation: slide-out 0.3s ease;
}
@keyframes slide-in {
  0% {
    transform: translate3d(0, 50px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes slide-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }
}
</style>
