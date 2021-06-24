class Reslut {
  constructor(result, msg) {
    this.msg = msg;
    this.result = result;
  }

  /**
   * 返回成功的结果
   * @param {*} result 
   * @returns 
   */
  static success(result) {
    return {
      msg: 'success',
      result
    }
  }

  /**
   * 返回失败的结果
   * @param {*} result 
   * @returns 
   */
  static error(result) {
    return {
      msg: 'error',
      result
    }
  }
}

module.exports = Reslut;
