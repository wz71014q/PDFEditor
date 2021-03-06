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
    location: {
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
    },
    location: {
      handler: function locationHandler (newVal) {
        this.initGuides(newVal)
      },
      deep: true
    }
  },
  mounted () {
    this.initGrid()
    this.initGui()
  },
  methods: {
    initGui () {
      const gui = new GUI()
      const group = gui.addFolder('工具栏')
      group.add(this.baseConfig, 'showNet').name('显示网格')
      group.open()
    },
    initGuides (loc) {
      const guides = this.$refs.guides
      guides.width = this.docWidth
      guides.height = this.docHeight
      let startX = 0
      let startY = 0
      for (let i = 0; i < this.coordinate.length; i++) {
        if (loc.left >= this.coordinate[i][0] - 5 && loc.left <= this.coordinate[i][0] + 5) {
          startX = this.coordinate[i][0]
        }
        if (loc.top >= this.coordinate[i][1] - 5 && loc.top <= this.coordinate[i][1] + 5) {
          startY = this.coordinate[i][1]
        }
      }
      if (startX && startY) {
        this.$emit('adsorption', [startX, startY])
      }
      if (guides.getContext) {
        const ctx = guides.getContext('2d')
        ctx.beginPath()
        ctx.moveTo(startX + 0.5, 0)
        ctx.lineTo(startX + 0.5, guides.height)
        ctx.moveTo(0, startY + 0.5, 0)
        ctx.lineTo(guides.width, startY + 0.5)
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
