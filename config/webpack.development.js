const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const minify = require('html-minifier').minify;


module.exports = {
  plugins: [
    //views里面的layout.html
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '../' + '/src/webapp/views/common/layout.html'),
      to: '../views/common/layout.html'
    }]),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '../' + '/src/webapp/widgets/'),
      to: '../widgets'
    }], {
      copyUnmodified: true,
      ignore: ['*.js', '*.css']
    }),
    new ExtractTextPlugin({
      filename: 'style/[name].css'
    })
  ]
};