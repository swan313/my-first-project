import IndexModel from '../models/IndexModel';

const indexController = {
  indexAction(){
    return async(ctx,next)=>{
      const indexModelIns = new IndexModel();
      const result = await indexModelIns.getData();
      ctx.body= await ctx.render('index/pages/index',{data:result});
    }
  }
};

export default indexController;