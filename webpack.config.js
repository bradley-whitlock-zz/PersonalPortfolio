var webpack = require('webpack')

module.exports = {
  entry: [
    './app/app.jsx'
  ],
  output: {
    path: './public',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module : {
    loaders : [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        // presets: ['es2015', 'react', 'stage-0']
      }
    ]
  },
};
