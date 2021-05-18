const path = require('path');
// plugin that creates our html file for us
// we will create our own custom template, incase we want to add scrips to it - src/index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');

// entry - our react entry file, or our root file
// output - where our compiled code goes (our one bundled JS file)
// module - loader, takes some rules
// rules - 
module.exports = {
    entry: './src/index.js',
    output: {
        // path - where the bundle file will show up
        // filename - the name of the bundle file
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                // regex to look through JS files for stuff to compile
                test: /\.js$/,
                // don't include node modules in our bundle
                exclude: /node_modules/,
                use: {
                    // babel-loader allows us to transpile our JS files
                    // transpile - transform from one language to another
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}

// path.join(__dirname, '/dist'): 
    // the absolute path to where this file is executing from 
    // plus the directory that we supply in the second param    