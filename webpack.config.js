const path = require('path');

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
    module: { 
        rules: [
            { // use loaders
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], // loader css [ css-loader / style-loader ]
            },
            { // sass Loader
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
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
            }
        ]
    }

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
 * [contenthash]
 * [id]
 * [query]
 */