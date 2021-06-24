const CommentService =  require("../service/CommentService");
const Result = require("../utils/Result");

class CommentController {
  async create(ctx, next) {
    const { content, userId, avatar } = ctx.request.body;
    const result = await CommentService.create(content, userId, avatar);
    if (result.affectedRows > 0) {
      ctx.body = Result.success("发布评论成功！");
    } else {
      ctx.body = Result.error("发布评论失败！");
    }
  }

  async addChildComment(ctx, next) {
    const { content, userId, parentId } = ctx.request.body;
    const result = await CommentService.addChildComment(content, userId, parentId);
    if (result.affectedRows > 0) {
      ctx.body = Result.success("发布评论成功！");
    } else {
      ctx.body = Result.error("发布评论失败！");
    }
  }
  async getComment(ctx) {
    const result = await CommentService.getComment();
    ctx.body = result;
  }
}

module.exports = new CommentController();
