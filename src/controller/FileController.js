const fs = require("fs");
const fileService = require('../service/FileService');
const Result = require("../utils/Result");
const {FILE_PATH} = require('../app/config');

class FileController {
  async saveAvatarInfo(ctx, next) {
    // 1.获取图像相关的信息
    console.log(ctx.req.body);
    const { filename, mimetype, size } = ctx.req.file;
    console.log(filename, mimetype, size)
    const { id } = ctx.req.body;
    if (id && id !== 'undefined') {
      // 2.将图像信息数据保存到数据库中
      const result = await fileService.createAvatar(filename, mimetype, size, id);
      // 4.返回结果
      ctx.body = Result.success({avatar: filename});
    } else {
      ctx.body = Result.error('请传入用户id~');
    }
  }

  async getAvatarByUserId(ctx, next) {
    // 1.用户的头像是哪一个文件呢?
    const { userId } = ctx.params;
    const avatarInfo = await fileService.getAvatarByUserId(userId);
    if (avatarInfo) {
      // 2.提供图像信息
      ctx.response.set('content-type', avatarInfo.mimetype);
      ctx.body = fs.createReadStream(`${FILE_PATH}/${avatarInfo.filename}`);
    } else {
      ctx.body = Result.success('该用户没有头像~')
    }
  }
}

module.exports = new FileController();