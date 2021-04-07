const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口
    entry: './index.js',
    // 输出
    output: {
        // 输出文件名
        filename: 'bundle.js',
        //输出路径
        path: path.resolve(__dirname, 'dist'), // 打包生成的文件夹
    },
    // 模式
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 2777,
    },
}