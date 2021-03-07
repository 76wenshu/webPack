const baseConfig = require("./webpack.base.js")
//去除公共部分
const { merge }= require("webpack-merge")
// const path = require("path")
// const VueLoaderPlugin = require("vue-loader/lib/plugin")
// //在打包结束的时候在dist中自动生成index.html 并且把打包好的js文件引入到html中
// const HtmlWebpackPlugin = require("html-webpack-plugin")
// //只是一个组件多有需要结构的行是来使用它
// const { CleanWebpackPlugin }= require("clean-webpack-plugin")
const webpack = require("webpack")

// const AutoPrefixer = require("autoprefixer")
const devConfig  = {
// module.exports = {
    // mode: "production",
    mode: "development",
    //打包入口文件
    // entry:"./src/main.js",
    //开发环境中有默认值eval
    devtool:"eval",
    //速度会慢一点但是作用是相同的(webpack5之后更加严格了要及时的去观看文档)
    // devtool:"cheap-module-eval-source-map",
    //起服务
    devServer:{
        contentBase:'./dist',
        open: true,
        hot: true
    },
    //打包出口文件
    // output:{
    //     filename:"main.js",
    //     path: path.resolve(__dirname, "dist")
    // },
    //打包规则
//     module:{
//         rules:[{
//             test:/\.vue$/,
//             loader:"vue-loader"
//     },
//     // {
//     //     //引用文件的打包加载的话可以自己去 webpack的官方文档中去看那一下他的使用详情
//     //         test:/\.(jpg|jpeg|png|svg)$/,
//     //         loader:"file-loader",
//     //         //组件的配置的修改可去webpack网站山可以去查看
//     //         options:{
//     //             name:"[name].[ext]"
//     //         }
    
//     // },
//     {
//         //引用文件的打包加载的话可以自己去 webpack的官方文档中去看那一下他的使用详情
//             test:/\.(jpg|jpeg|png|svg)$/,
//             loader:"url-loader",
//             //组件的配置的修改可去webpack网站山可以去查看 当如果超出他的限定值他会直接使用file-loader
//             options:{
//                 name:"[name].[ext]",
//                 limit: 2048
//             }
    
//     },
//     {
//             test:/\.css$/,
//             //因为css中安装了两个依赖所以使用的数组的行是（从左到右，从上到下依次执行）
//             use:["style-loader","css-loader"],
//     },
//     {
//             test:/\.styl(us)?$/,
//             //因为css中安装了两个依赖所以使用的数组的行是（从左到右，从下到上依次执行）
//             use:[
//                 "vue-style-loader",
//                 "css-loader",
//                 "posrcss-loader",
//                 "stylus-loader"
//         ],
//     },
// ]
//     },
    //应用VUE处理的插件的插件(谋个时间节点下执行下边的插件来执行我们使用插件所达到的目的)
    plugins:[
        // new VueLoaderPlugin(),
        // new HtmlWebpackPlugin({
        //     template:"./index.html"
        // }),
        // new CleanWebpackPlugin(),
        //模块热替换
        new webpack.HotModuleReplacementPlugin()
    ],
    //vue打包是 有很多种的我们使用时的是其中的vue.js不是使用默认导出的vue.common.js
    // resolve:{
    //     alias:{
    //         "vue":"vue/dist/vue.js"
    //     }
    // },
}

module.exports = merge(baseConfig,devConfig)