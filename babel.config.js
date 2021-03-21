module.exports = {
  presets:[// babel 解析的预设，反向执行
    '@babel/preset-env',
    '@babel/preset-typescript'
  ],
  overrides: [{ //解析vue中的ts
    test: /\.vue$/,
    plugins: [
        '@babel/transform-typescript'
    ]
  }]
}