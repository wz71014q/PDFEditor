<template>
  <div class="layout-root">
    <canvas ref="designerGrids" class="net-canvas" :class="{ hide: !baseConfig.showNet }"></canvas>
  </div>
</template>

<script>
import { GUI } from 'dat.gui'

export default {
  name: 'Layout',
  // props: {
  //   showNet: {
  //     type: Boolean,
  //     default () {
  //       return true
  //     }
  //   }
  // },
  data () {
    return {
      docWidth: document.documentElement.clientWidth || document.body.clientWidth,
      docHeight: document.documentElement.clientHeight || document.body.clientHeight,
      baseConfig: {
        showNet: false,
        copies: 24
      },
      fraction: {
        fractionX: 0,
        fractionY: 0
      },
      coordinate: []
    }
  },
  mounted () {
    this.initGui()
    this.draw()
  },
  methods: {
    initGui () {
      const gui = new GUI()
      const group = gui.addFolder('工具栏')
      group.add(this.baseConfig, 'showNet').name('显示网格')
      group.open()
    },
    draw () {
      const designerGrids = this.$refs.designerGrids
      designerGrids.width = this.docWidth
      designerGrids.height = this.docHeight
      this.fraction.fractionX = parseFloat(Math.round(designerGrids.width / this.baseConfig.copies))
      this.fraction.fractionY =
      parseFloat(Math.round(designerGrids.height / this.baseConfig.copies))
      if (this.fraction.fractionX - this.fraction.fractionY !== 0) {
        this.fraction.fractionX = Math.max(this.fraction.fractionX, this.fraction.fractionY)
        this.fraction.fractionY = Math.max(this.fraction.fractionX, this.fraction.fractionY)
      }
      for (let i = 0; i <= this.baseConfig.copies; i++) {
        this.coordinate.push([this.fraction.fractionX * i, this.fraction.fractionY * i])
      }
      const arrayLenth = this.coordinate.length
      if (designerGrids.getContext) {
        const ctx = designerGrids.getContext('2d')
        ctx.beginPath()
        this.coordinate.forEach((item, index) => {
          ctx.moveTo(item[0] + 0.5, 0)
          ctx.lineTo(item[0] + 0.5, this.coordinate[arrayLenth - 1][1])
          ctx.moveTo(0, item[1] + 0.5)
          ctx.lineTo(this.coordinate[arrayLenth - 1][0], item[1] + 0.5)
        })
        ctx.lineWidth = 1
        ctx.strokeStyle = '#ccc'
        ctx.stroke()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-root {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}
.hide {
  visibility: hidden;
}
</style>
