const pluginName = 'htmlAfterWebpackPlugin';
const assetsHelp = (data) => {
  let css = [], js = [];
  const dir={
    js:item=>`<script src="${item}"></script>`,
    css:item=>`<link rel="stylesheet" href="${item}"/>`
  };
  for (let jsitem of data.js){
    js.push(dir.js(jsitem));
  }
  for (let cssitem of data.css){
    css.push(dir.css(cssitem));
  }
  return {
    css,
    js
  }
};

class htmlAfterWebpackPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, compilation => {
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(pluginName, htmlPluginData => {
        let _html = htmlPluginData.html;
        const result = assetsHelp(htmlPluginData.assets);
        //使用cheerio vue ssr
        _html = _html.replace('<!--injectcss-->', result.css.join(''));
        _html = _html.replace('<!--injectjs-->', result.js.join(''));
        htmlPluginData.html = _html;
      })
    })
  }
}

module.exports = htmlAfterWebpackPlugin;