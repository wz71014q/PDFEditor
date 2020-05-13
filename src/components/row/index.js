import Row from './src/row'

/* istanbul ignore next */
Row.install = function row (Vue) {
  Vue.component(Row.name, Row)
}

export default Row
