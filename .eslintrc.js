module.exports = {
  extends: ['plugin:vue/strongly-recommended', '@vue/standard'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    parser: 'babel-eslint'
  },
  // plugins: ['vue', 'html'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true
  },
  globals: {
    ISDEVELOPMENT: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue', '.jsx']
      }
    }
  },
  rules: {
    // 0代表忽略，1代表警告，2代表错误
    'camelcase': [2, {allow: ['\w*_\w*']}],
    'no-var': 0, // 禁止使用var
    'prefer-const': 2, // 优先使用const，有重新赋值的需求用let
    'object-shorthand': 2, // 对象内部属性尽量使用简写
    'quote-props': [2, 'as-needed'], // 只用引号引无效标识符的属性
    'array-callback-return': 2, // 数组的方法应该明确标注返回值
    'prefer-destructuring': 0, // 尽量使用解构赋值 , 待讨论, 如this.myArray = tempArr[0]
    'max-len': [2, 100, { ignoreUrls: true }], // 每行内容不能超过100个字符，忽略检查URL
    'prefer-template': 2, // 字符串的拼接尽量使用ES6模板字符串
    'template-curly-spacing': 2, // 模板字符串字符串与大括号之间加空格
    'prefer-rest-params': 2, // 方法内的参数优先使用...而不是arguments
    'no-param-reassign': 1, // 尽量不要去修改原参数，防止更改原始引用类型的值
    'prefer-spread': 2, // 优先使用...来调用可变参数
    'object-property-newline': 2, // 对象内的元素单独拆分一行
    'prefer-arrow-callback': 2, // 回调函数优先使用箭头函数
    'no-confusing-arrow': [2, { allowParens: true }], // 避免将比较运算符于箭头函数混淆
    'import/no-mutable-exports': 2, // 禁止导出的模块具有不确定性的值
    'dot-notation': 2, // 引用对象内非变量属性应尽量使用.
    'no-multi-assign': 2, // 禁止链式赋值
    'no-nested-ternary': 2, // 禁止嵌套三元表达式
    'no-mixed-operators': 2, // 避免多个运算符混乱，多个运算符时适当加()区分
    'nonblock-statement-body-position': 2, //多行的代码块需要用大括号括起来
    'newline-per-chained-call': 2, // 两个以上的链式调用要分多行
    'func-names': [2, 'as-needed'], // 方法需要名称时必须命名
    'id-length': 0, // 变量名称不能太短，避免出现const a = 1这种名称.( 暂时关掉，for (let i = 0; ))
    // vue规则：https://eslint.vuejs.org/rules/
    "vue/html-closing-bracket-newline": 0, // vue html标签'>'不需要换行
    "vue/html-self-closing": 0, // 禁止强制自闭合HTML标签
    "vue/max-attributes-per-line": [2, { // 属性超过5个强制换行
      "singleline": 5,
      "multiline": {
        "max": 5,
        "allowFirstLine": false
      }
    }],
    "prefer-promise-reject-errors": 0, // promise reject可以自定义参数
    "vue/order-in-components": [2, { // vue 按照官方推荐页面元素顺序排序
      "order": [
        "el",
        "name",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "fetch",
        "asyncData",
        "data",
        "computed",
        "watch",
        "LIFECYCLE_HOOKS",
        "methods",
        "head",
        ["template", "render"],
        "renderError"
      ]
    }]
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        "jest": true
      }
    }
  ]
}
