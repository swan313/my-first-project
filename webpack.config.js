const argv = require("yargs-parser")(process.argv.slice(2));
const merge = require("webpack-merge");
const glob = require("glob");
const files = glob.sync('./src/webapp/views/**/*.entry.js');
const _mode = argv.mode || 'development';
const _mergconfig = require(`./config/webpack.${_mode}.js`);
const { resolve, join, basename } = require("path");
let _entry = {};

for (let item of files) {
  //index-index.entry.js -> index.index.js
  if (/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js$)/g.test(item)) {
    const entrykey = RegExp.$1;
    console.log(entrykey);
    _entry[entrykey] = item;
  }
}

let webpackConfig = {
  entry: _entry,
  output: {
    path:join(__dirname,"./dist/assets"),
    publicPath:"/",
    filename:"scripts/[name].boudle.js"
  }
};
module.exports = merge(webpackConfig, _mergconfig);
