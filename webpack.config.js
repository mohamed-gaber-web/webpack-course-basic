const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // CONVERT CSS TO FILE 
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // CLEAN FOLDER FILES
const HtmlWebpackPlugin = require('html-webpack-plugin'); // HTML COMILER



module.exports = {
    // webpack configrations
    entry: {
        build: './src/app.js'
    }, // [] {engine: ''} file compile
    mode: "development", // development - production[compress code] - none
    output: {
        // path: path.resolve(__dirname, 'build'),
        // filename: 'js/[name].js' // output file tp dist
        filename: 'build.js'
    },
    module: { // Loaders
        rules: [
            { // use loaders
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'], // loader css [ css-loader / style-loader ]
            },
            { // sass Loader
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
            },
            { // babel compile js 
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['transform-class-properties']
                  }
                }
            },
            { // files images loaders
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                        name: '[name].[ext]',
                        outputPath: 'src/',
                        publicPath: 'src/',
                      },
                  },
                ],
              },
              {
                test: /\.(html)$/,
                use: {
                  loader: 'html-loader'
                }
              }
        ]
    },
    plugins: [ // plugins
      new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css'
      }), // npm install --save-dev mini-css-extract-plugin 
      new CleanWebpackPlugin(), // npm install --save-dev clean-webpack-plugin
      new HtmlWebpackPlugin({
      template: './src/index.html'
      }) // npm i --save-dev html-webpack-plugin

    ]

}


/**
 * mode
 * entry
 * output
 * loaders
 */

/**
 * [name]
 * [hash]
 * [contenthash] use to cashing and add random string to file 
 * [id]
 * [query]
 */