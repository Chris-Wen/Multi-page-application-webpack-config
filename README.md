# Multi-page application webpack config

> 多页面webpack基础配置

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

----
### 配置基础

>  项目在vue-cli 2.x 的基础配置上进行改造，去除了vue配置，改造成无框架的webpack基础配置, 添加了less, 可直接使用
> 写在src/views 文件夹下的页面，按照template的结构，即 template文件夹->template.html->template.js->template.css(样式文件 css/less)。在进行npm run build 打包后，即可打包成多个对应的页面

----

### 缺陷

目前html文档修改后热加载暂不支持，其他问题待检验