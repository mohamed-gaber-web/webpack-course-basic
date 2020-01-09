const path = require('path');

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

module.exports = {
    // webpack configrations
    entry: {
        build: './src/app.js'
    }, // [] {engine: ''} file compile
    mode: "development", // development - production[compress code]
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
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
            },
        ]
    }

}