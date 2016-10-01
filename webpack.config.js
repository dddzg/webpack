var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/app.js",
    output:{
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                //配置css的抽取器、加载器。'-loader'可以省去
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.scss$/,
                //!从右往左
                loader: 'css!sass'
            },
            {
                //文件加载器，处理文件静态资源
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            },
            {
                //图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
                //如下配置，将小于8192byte的图片转成base64码
                // base的好处可以看看这篇文章
                // http://www.zhangxinxu.com/wordpress/2012/04/base64-url-image-%E5%9B%BE%E7%89%87-%E9%A1%B5%E9%9D%A2%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'
            }
        ]
    },
    postcss: function () {
        return [require('autoprefixer'), require('precss')];
    },
    plugins:[
        //new ExtractTextPlugin('./css/output.css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        })
        // new HtmlWebpackPlugin({
        //     template:'./index.html',
        //     minify:{    //压缩HTML文件
        //          removeComments:true,    //移除HTML中的注释
        //          collapseWhitespace:true    //删除空白符与换行符
        //     }
        // })
    ]
}