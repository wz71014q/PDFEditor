const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const StylelintFormatterPretty = require('stylelint-formatter-pretty')

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/styles/reset.scss"; @import "@/styles/common.scss";'
      }
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config
      .plugin('StyleLintPlugin')
      .use(StyleLintPlugin, [{
        fix: true,
        configFile: path.resolve(__dirname, './.stylelintrc.js'),
        files: 'src/**/*.{vue,css,scss,sass}',
        emitError: false,
        emitWarning: true,
        formatter: StylelintFormatterPretty
      }])
    if (process.env.NODE_ENV !== 'production') {
      config.module
        .rule('eslint')
        .use('eslint-loader')
        .loader('eslint-loader')
        .tap(options => {
          options.fix = true
          return options
        })
    }
  }
}
