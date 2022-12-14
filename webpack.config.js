const path = require('path')
const htmlplugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename:'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader'
                }
            }

        ]
    },
    plugins: [
        new htmlplugin({
            template:'./index.html'
        })
    ]
}