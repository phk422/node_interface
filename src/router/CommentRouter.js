const Router = require("koa-router");
const { create, addChildComment, getComment } = require("../controller/CommentController");

const commentRouter = new Router({prefix: "/comment"});

commentRouter.post("/create", create);
commentRouter.post("/addChildComment", addChildComment);
commentRouter.get("/getComment", getComment);
module.exports = commentRouter;
