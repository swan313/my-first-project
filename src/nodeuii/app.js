import Koa from 'koa';
import config from './config';
import log4js from 'log4js';
import errorHandler from './middwares/errorHandler';
import render from 'koa-swig';
import serve from 'koa-static';
import co from 'co';
import {asClass, asFunction, asValue} from 'awilix';
import {loadControllers, scopePerRequest} from 'awilix-koa';

const app = new Koa();

//ioc控制反转的容器
const container = createContainer();
//第一次请求new
app.use(scopePerRequest(container));
//装载所有的services到controllers，完成利用切面注入
container.loadModules([__dirname+'/services/*.js'],{
  formatName: 'camelCase',
  resolverOptions: {
    lifetime: Lifetime.SCOPED
  }
});

app.context.render = co.wrap(render({
  root: config.viewDir,
  autoescape: true,
  cache: 'memory', //把缓存放到内存
  varControls: ['[[', ']]'],  //修改模板，默认{{}}
  ext: 'html'
}));

log4js.configure({
  appenders: {cheese: {type: 'file', filename: __dirname + '/logs/cheese.log'}},
  categories: {default: {appenders: ['cheese'], level: 'error'}}
});
const logger = log4js.getLogger('cheese');
//错误处理的中心
errorHandler.error(app, logger);
app.use(loadControllers(__dirname + '/controllers/*.js', {cwd: __dirname}));


//静态资源管理
app.use(serve(config.staticDir));
app.listen(config.port, () => {
  logger.error('cheese is to ripe!');
  console.log(`listening on ${config.port}`)
});





