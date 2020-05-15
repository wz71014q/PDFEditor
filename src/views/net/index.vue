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
        myOffsetTop: 0
      },
      draggerStyle: {
        top: 0,
        left: 0
      },
      fraction: {
        fractionX: 0,
        fractionY: 0
      },
      mapping: []
    }
  },
  mounted () {
    this.getGrid()
  },
  methods: {
    getGrid () {
      this.fraction.fractionX = this.docWidth / 24
      this.fraction.fractionY = this.docHeight / 24
      for (let i = 0; i <= 24; i++) {
        this.mapping.push([this.fraction.fractionX * i, this.fraction.fractionY * i])
      }
      console.log('getGrid', this.docWidth, this.docHeight, this.fraction, this.mapping)
    },
    drag (event) {
      const _event = event || window.event
      this.elePosition.myOffsetLeft = _event.target.offsetLeft
      this.elePosition.myOffsetTop = _event.target.offsetTop
      this.elePosition.startX = _event.clientX
      this.elePosition.startY = _event.clientY
      this.elePosition.width = _event.target.offsetWidth
      this.elePosition.height = _event.target.offsetHeight
      document.addEventListener('mousemove', this.move)
      document.addEventListener('mouseup', this.clear)
      document.addEventListener('mousecancel', this.clear)
    },
    move (event) {
      const _event = event || window.event
      const diffX = _event.clientX - this.elePosition.startX // 移动距离
      const diffY = _event.clientY - this.elePosition.startY
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
    getDragPosition (posX, posY) {
      const posXIndex = Math.floor(posX / this.fraction.fractionX)
      const posYIndex = Math.floor(posY / this.fraction.fractionY)
      console.log(posXIndex, posYIndex)
    },
    clear () {
      this.getDragPosition(this.draggerStyle.left, this.draggerStyle.top)
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
