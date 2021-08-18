#### 初始化
- npm i lerna -g
- npm init -y [x]
- lerna init [v]
- yarn i 下载依赖并且生成本地node_modules软链
- yarn add typescript -W  安装在根目录 声明模块需要用到ts。。。。
- npx tsc --init 生成 ts 配置文件
- yarn add vue@next -W



#### lerna 管理 monorepo
- "packages": [
    "packages/*"
  ], lerna 管理 packages 下的文件
- "npmClient": "yarn", 告诉 lerna 用 yarn 管理我们安装包
- "useWorkspaces": true, 告诉 lerna 使用 yarn 中的 workspaces，workspaces 需要在 package.json 中配置


#### package.json

#### 创建组件
- lerna create @y-ui/xxx
- lerna create y-ui


#### website 效果展示
```sh
  webpack.config.js
    yarn add
    webpack
    webpack-cli // webpack 命令行
    webpack-dev-server  // webpack 服务
    vue-loader@next // 解析 vue 模块
    @vue/compiler-sfc // 编译 vue template
    -D

    yarn add
    babel-loader
    @babel/core
    @babel/preset-env // 高级语法编译为低级语法
    @babel/preset-typescript // 编译 ts 语法
    url-loader // base 64
    file-loader // 大文件生成真实文件
    html-webpack-plugin
    css-loader
    sass-loader
    style-loader
    sass
    -D

```



##### gulp 打包样式

```sh
yarn add gulp gulp-autoprefixer gulp-cssmin gulp-dart-sass gulp-rename -D -W
```


##### 打包 esm 格式组件包(全部/每个)
```sh
yarn add rollup rollup-plugin-typescript2 @rollup/plugin-node-resolve rollup-plugin-vue -D -W
```


##### 打包 umd 格式
```sh
  浏览器/全局都可以用
```


### ToDo-List
- [x] icon
- [x] button
- [x] button-group
- [ ] layoout
- [ ] checkbox
- [ ] checkbox-group
- [ ] transfer
- [ ] message



### 问题记录
```sh
- gulp-dart-sass 插件 不支持 scss(1.33.x 以上版本 将 10 / 2 更新为 math.div(10, 2)) 新语法 math.div，
  需要换成 gulp-dart-scss 插件 (https://sass-lang.com/documentation/breaking-changes/slash-div)
```





