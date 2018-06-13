'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const errorHandler = {
  error(app, logger) {

    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (error) {
        logger.error(error);
        ctx.status = error.status || 500;
        ctx.body = 'error page';
      }
    });

    app.use(async (ctx, next) => {
      await next();
      if (404 != ctx.status) return;
      ctx.status = 404;
      ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" homePageName="返回宝贝回家" homePageUrl="http://www.baidu.com" charset="utf-8"></script>';
    });
  }
};
exports.default = errorHandler;