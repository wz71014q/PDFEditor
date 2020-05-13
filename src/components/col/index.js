import ElCol from './col'

/* istanbul ignore next */
ElCol.install = function col (Vue) {
  Vue.component(ElCol.name, ElCol)
}

export default ElCol
