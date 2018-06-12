const path = require('path');

const config = {
  entry: ['babel-polyfill', './lib/components/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.css$/, exclude: /node_modules/, use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'lib', 'lib/components']
  }
};

module.exports = config; 