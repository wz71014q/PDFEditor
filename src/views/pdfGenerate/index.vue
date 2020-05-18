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
    <div class="net-area"></div>
    <div class="net-span"></div>
    <div class="net-name"></div>
    测试中文
  </div>
</template>

<script>
import JsPDF from 'jspdf'
import html2pdf from 'html2pdf.js'

export default {
  name: 'PdfGenerate',
  data () {
    return {
      msg: 'root'
    }
  },
  mounted () {
    this.getPdf1()
  },
  methods: {
    getPdf () {
      var doc = new JsPDF()
      doc.text('测试中文', 10, 10)
      doc.save('a4.pdf')
    },
    getPdf1 () {
      var element = document.getElementById('app')
      var opt = {
        margin: 1,
        filename: 'myfile.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      }
      html2pdf().set(opt)
        .from(element)
        .save()
    }
  }
}
</script>

<style lang="scss" scoped>
.net-root {
  display: grid;
  grid-auto-rows: minmax(50px, auto);
  grid-auto-columns: minmax(50px, 100px);
  grid-gap: 0;
  grid-template-rows: repeat(24, [row-start] 1fr [row-end]);
  grid-template-columns: repeat(24, [col-start] 1fr [col-end]);
  width: 100%;
  height: 100%;
}
.net-row {
  border: 1px grid #000;
  background-color: antiquewhite;
}
.net-area {
  grid-area: 3 / 3 / 5 / 5;
  background-color: antiquewhite;
}
.net-span {
  grid-area: 6 / 2 / span 2 / span 2;
  background-color: antiquewhite;
}
.net-name {
  grid-row: row-start 9 / row-start 10;
  grid-column: col-start 2 / col-start 3;
  background-color: antiquewhite;
}
</style>
