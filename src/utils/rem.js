(function setRootFontZise () {
  const docEl = document.documentElement
  // 横竖屏切换
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  const recalc = function () {
    const clientWidth = docEl.clientWidth
    if (!clientWidth) return
    if (clientWidth >= 500) {
      docEl.style.fontSize = '100px'
    } else {
      docEl.style.fontSize = `${100 * (clientWidth / 375)}px`
    }
    actualResizeHandler()
  }
  // 系统调整字体后，webview页面会受影响，检查放大了多少倍，将根元素大小同步缩小相同倍数
  function actualResizeHandler () {
    const fontsize = /^\d+/.exec(document.documentElement.style.fontSize)
    const cmtFont =
      /^\d+/.exec(window.getComputedStyle(document.getElementsByTagName('html')[0]).fontSize)
    const radio = Number(fontsize) / Number(cmtFont)
    if (radio !== 1) {
      document.documentElement.style.fontSize = `${Number(fontsize) * radio}px`
    }
  }
  if (!document.addEventListener) return
  window.addEventListener(resizeEvt, recalc, false)
  document.addEventListener('DOMContentLoaded', recalc, false)
}())

// module.exports = resetFontsize;
