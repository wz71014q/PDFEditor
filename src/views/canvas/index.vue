<template>
  <canvas ref="designerGrids" id="canvas" class="layout-root"></canvas>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      copies: 24,
      docWidth: document.documentElement.clientWidth || document.body.clientWidth,
      docHeight: document.documentElement.clientHeight || document.body.clientHeight,
      fraction: {
        fractionX: 0,
        fractionY: 0
      },
      coordinate: []
    }
  },
  mounted () {
    this.draw()
  },
  methods: {
    draw () {
      const designerGrids = this.$refs.designerGrids
      designerGrids.width = this.docWidth
      designerGrids.height = this.docHeight
      this.fraction.fractionX = parseFloat(Math.round(designerGrids.width / this.copies))
      this.fraction.fractionY = parseFloat(Math.round(designerGrids.height / this.copies))
      if (this.fraction.fractionX - this.fraction.fractionY !== 0) {
        this.fraction.fractionX = Math.min(this.fraction.fractionX, this.fraction.fractionY)
        this.fraction.fractionY = Math.min(this.fraction.fractionX, this.fraction.fractionY)
      }
      for (let i = 0; i <= this.copies; i++) {
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
  position: absolute;
  top: 0;
  left: 0;
}
</style>
