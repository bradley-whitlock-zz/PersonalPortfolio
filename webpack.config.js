var webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './app/main.jsx',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  module : {
    loaders : [
      {
        test : /\.jsx$/,
        exclude: /node_modules/,
        loader : 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};
