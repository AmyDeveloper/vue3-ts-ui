const path = require('path')
const { VueLoaderPlugin } = require ('vue-loader')

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, '../packages/y-ui/index.ts'),
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'y-ui',
  },
  resolve: {// 解析模块对应的扩展名
    extensions: ['.ts', '.js', '.tsx', '.vue']
  },
  externals: { // 排除vue打包
    vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
    },
  },
  module: { // 解析模块
    rules:[
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}