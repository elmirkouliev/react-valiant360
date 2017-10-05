const path = require('path');
const package = require('./package.json');
const webpack = require('webpack');
const jsPath = `[name].js`;
const fileLoaderName = '[name].[ext]';


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: jsPath,
        libraryTarget: 'commonjs2' 
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
    ],
    module: {
        rules: [
            // Babel
            {
                test: /\.css$/,
                use: [{ 
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }]
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: { 
                    loader: `file-loader?name=${fileLoaderName}`
                }
            },
            {
                test: /\.exec\.js$/,
                use: [ 'script-loader' ]
            }
        ]
    },
    externals: {
        'react': 'commonjs react'
    }
};