var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function resolve(path){
    return __dirname + '/' + path;
}
module.exports = {
    devtool: '#source-map',//'#cheap-module-eval-source-map'在开发环境中使用，编译后文件非常大
    entry: resolve('src/index.js'),
    output: {
        path: resolve('dist'),
        filename: 'toc.min.js'
    },
    devServer: {
        inline: true,
        hot: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    },
    plugins: [
        //删除文件
        new CleanWebpackPlugin(
            ['dist/*'], {
                root: __dirname,
                verbose: true,
                dry: false
            }
        ),
        //压缩js代码
        new UglifyJsPlugin({
            sourceMap: true, //为false的话将会删除sourceMap文件
            uglifyOptions:{
                compress: {
                    warnings: false
                }
            }
        })
    ]
}