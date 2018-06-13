const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const minify = require('html-minifier').minify;

module.exports = {
  output: {
    filename: "scripts/[name].[hash:5].bundle.js"
  },
  plugins: [
    //views里面的layout.html
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '../' + '/src/webapp/views/common/layout.html'),
      to: '../views/common/layout.html',
      //压缩
      transform(content, path) {
        return minify(content.toString('utf-8'), {
          collapseWhitespace: true
        })
      }
    }]),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '../' + '/src/webapp/widgets/'),
      to: '../widgets',
      //压缩
      transform(content, path) {
        return minify(content.toString('utf-8'), {
          collapseWhitespace: true
        })
      }
    }], {
      copyUnmodified: true,
      ignore: ['*.js', '*.css']
    }),
    new ExtractTextPlugin({
      filename: 'style/[name]-[hash:5].css'
    })
  ]
};