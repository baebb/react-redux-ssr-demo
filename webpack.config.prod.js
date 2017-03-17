const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    //set env
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        WEBPACK: true
      }
    }),
    //js minification
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    //copy to dist folder
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src', 'assets'),
        to: path.resolve(__dirname, 'dist', 'assets')
      }
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        }),
        include: path.resolve(__dirname, 'src')
      }
    ],
  }
};
