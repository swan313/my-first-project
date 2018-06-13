/*
const indexController = {
  indexAction(){
    return async(ctx,next)=>{
      const indexModelIns = new IndexModel();
      const result = await indexModelIns.getData();
      ctx.body= await ctx.render('index/pages/index',{data:result});
    }
  }
};

export default indexController;*/

import {route, GET, POST, before} from 'awilix-koa';

@route('/')
@route('/index.html')
export default class UserAPI {
  constructor({IndexService}) {
    this.IndexService = IndexService;
  }

  @GET()
  async getData(ctx, next) {
    const result = await indexModelIns.getData();
    ctx.body= await ctx.render('index/pages/index',{data:result});
  }
}