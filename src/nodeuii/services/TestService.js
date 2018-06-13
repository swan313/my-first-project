/**
 * @fileOverview 实现Test数据模型
 * @author swan313@126.com
 */

/**
 * TestModel类，生成一段异步的数据
 * @class
 */
export default class TestService {
  /**
   * @constructor
   * @param{string}app  koa2上下文环境
   */
  constructor(app){

  }

  /**
   * 获取数据的 TestModel API
   * @returns {Promise} 返回异步的处理结果
   * @example
   * return new Promise
   * getQQ
   */
  getQQ(){
    return 111;
  }

}


