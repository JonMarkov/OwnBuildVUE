const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    // 入口文件
    entry: './src/index.js',
    //编译输出配置
    output: {
        path: path.resolve(__dirname + './dist'),  //目录
        filename: 'bundle.js',  //文件名
        publicPath: '/'    //根目录
    },
    devServer: {
        port: 8084,  ///端口
        hot: true  //是否热重载
    },
    resolve: {
        extensions: ['.js', '.vue'],  //js 和 vue 文件在import导入的时候不需要带扩展
        alias: {
            'vue$': 'vue/dist/vue.esm.js',  //vue官方指定写法，如果不写这个，则运行的时候会提示
            '@': path.resolve(__dirname, 'src')  //给src目录起个别名@ ，引用src目录的时候，可用@替代
        }
    },
    // 下面是loader的配置
    module: {
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader'],
            }, {
                test: /\.vue$/,
                use: ['vue-loader']
            }, {
                test: /\.css$/,
                use: ['css-loader']
            }, {
                test: /\.less$/,
                use: [
                    "css-loader",
                    "less-loader"
                ]
            }, {
                test: /(\.jpg|\.png|\.jpeg|\.gif)$/i,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: '[name]-[hash:7].[ext]'
                }
            }
        ]
    },
    // 插件的配置
    plugins: [
        new htmlPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
