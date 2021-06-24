const UserService = require("../service/LoginService");
const Result = require('../utils/Result');

class LoginController {
  async login(ctx, next) {
    const { name, password } = ctx.request.body;
    const result = await UserService.findUser(name, password);
    // 查询用户是否存在
    if (result.length > 0) {
      ctx.response.body = Result.success(result[0]);
    } else {
      ctx.response.body = Result.error("用户名或密码错误！");
    }
  }
}

module.exports = new LoginController();