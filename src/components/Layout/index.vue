<template>
  <div class="layout-root">
    <canvas ref="designerGrids" class="net-canvas" :class="{ hide: !baseConfig.showNet }"></canvas>
    <canvas ref="guides" class="guides-canvas"></canvas>
  </div>
</template>

<script>
import { GUI } from 'dat.gui'

export default {
  name: 'Layout',
  props: {
    dataSource: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      cnvasContext: '',
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
  watch: {
    baseConfig: {
      handler: (newVal) => {
        if (newVal.showNet) {
          console.log(newVal)
        }
      },
      deep: true
    }
  },
  mounted () {
    this.initGrid()
    this.initGui()
    this.initGuides()
  },
  methods: {
    initGui () {
      const gui = new GUI()
      const group = gui.addFolder('工具栏')
      group.add(this.baseConfig, 'showNet').name('显示网格')
      group.open()
    },
    initCnvas () {
      const designerGrids = this.$refs.designerGrids
      designerGrids.width = this.docWidth
      designerGrids.height = this.docHeight
      let ctx = ''
      if (designerGrids.getContext) {
        ctx = designerGrids.getContext('2d')
      } else {
        alert('您的浏览器不支持canvas')
      }
      return ctx
    },
    initGuides (context) {
      const guides = this.$refs.guides
      guides.width = this.docWidth
      guides.height = this.docHeight
      if (guides.getContext) {
        const ctx = guides.getContext('2d')
        ctx.beginPath()
        ctx.moveTo(50 + 0.5, 0)
        ctx.lineTo(50 + 0.5, 500.5)
        ctx.lineWidth = 1
        ctx.strokeStyle = '#ff0000'
        ctx.stroke()
      }
    },
    initGrid () {
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
        this.cnvasContext = ctx
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
.guides-canvas {
  position: absolute;
  top: 0;
  left: 0;
}
.hide {
  visibility: hidden;
}
</style>
