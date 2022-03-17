const path = require('path');
module.exports = {
  //entry: path.resolve(__dirname,'app'),
  entry: ['babel-polyfill', __dirname + '/app/index.js'],
  // OPTIMIZE:
  optimization:{
    minimize: false
  },
  output: {
    path: path.resolve(__dirname,'build'),
    filename: 'bundle.js'
  },
  devServer:{
    port: 3001,
    contentBase : path.resolve(__dirname,'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};
