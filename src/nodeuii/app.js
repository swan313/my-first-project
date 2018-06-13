import Koa from 'koa';
import controllerInit from './controllers/controllerInit';
import router from 'koa-simple-router';
import config from './config';
import log4js from 'log4js';
import errorHandler from './middwares/errorHandler';
import render from 'koa-swig';
import serve from 'koa-static';
import co from 'co';

const app = new Koa();
app.context.render = co.wrap(render({
  root: config.viewDir,
  autoescape: true,
  cache: 'memory', //把缓存放到内存
  varControls:['[[',']]'],  //修改模板，默认{{}}
  ext: 'html'
}));

log4js.configure({
  appenders: { cheese: { type: 'file', filename: __dirname +'/logs/cheese.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');
//错误处理的中心
errorHandler.error(app,logger);

//集中的处理所有的路由
controllerInit.getAllrouters(app, router);

//静态资源管理
app.use(serve(config.staticDir));
app.listen(config.port,()=>{
  logger.error('cheese is to ripe!');
  console.log(`listening on ${config.port}`)
});





