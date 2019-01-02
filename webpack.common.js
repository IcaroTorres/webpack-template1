const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{ loader: 'file-loader' }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [ 'file-loader' ]
      }
    ]
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'My killer app'
    })
  ]
}