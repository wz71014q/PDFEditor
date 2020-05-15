import Net from './src'

Net.install = function net (Vue) {
  Vue.component(Net.name, Net)
}

export default Net
