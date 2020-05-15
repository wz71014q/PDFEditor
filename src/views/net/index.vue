<template>
  <div class="net-root">
    <div class="container">
      <div
        ref="dragger"
        class="center"
        @mousedown.stop.self="drag"
        :style="`top: ${draggerStyle.top}px; left: ${draggerStyle.left}px`">
        1
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Net',
  data () {
    return {
      docWidth: document.documentElement.clientWidth || document.body.clientWidth,
      docHeight: document.documentElement.clientHeight || document.body.clientHeight,
      elePosition: {
        width: 0,
        height: 0,
        startX: 0,
        startY: 0,
        myOffsetLeft: 0,
        myOffsetTop: 0,
        clickPositionX: 0,
        clickPositionY: 0
      },
      draggerStyle: {
        top: 0,
        left: 0
      },
      mapping: []
    }
  },
  mounted () {
  },
  methods: {
    drag (event) {
      const _event = event || window.event
      this.elePosition.myOffsetLeft = _event.target.offsetLeft
      this.elePosition.myOffsetTop = _event.target.offsetTop
      this.elePosition.startX = _event.clientX
      this.elePosition.startY = _event.clientY
      this.elePosition.width = _event.target.offsetWidth
      this.elePosition.height = _event.target.offsetHeight
      this.elePosition.clickPositionX = _event.clientX - _event.target.offsetLeft
      this.elePosition.clickPositionY = _event.clientY - _event.target.offsetTop
      document.addEventListener('mousemove', this.move)
      document.addEventListener('mouseup', this.clear)
      document.addEventListener('mousecancel', this.clear)
    },
    move (event) {
      const _event = event || window.event
      const diffX = _event.clientX - this.elePosition.startX // 点击位置与div左边距的差
      const diffY = _event.clientY - this.elePosition.startY // 点击位置与div上边距的差
      let finnalX = diffX + this.elePosition.myOffsetLeft
      let finnalY = diffY + this.elePosition.myOffsetTop
      if (finnalX <= 0) {
        finnalX = 0
      }
      if (finnalY <= 0) {
        finnalY = 0
      }
      if (finnalX >= this.docWidth - this.elePosition.width) {
        finnalX = this.docWidth - this.elePosition.width
      }
      if (finnalY >= this.docHeight - this.elePosition.height) {
        finnalY = this.docHeight - this.elePosition.height
      }
      this.draggerStyle.left = finnalX
      this.draggerStyle.top = finnalY
    },
    clear () {
      document.removeEventListener('mousemove', this.move)
      document.removeEventListener('mouseup', this.clear)
    }
  }
}
</script>

<style lang="scss" scoped>
.net-root {
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
}
.center {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: aquamarine;
  cursor: move;
}
</style>
