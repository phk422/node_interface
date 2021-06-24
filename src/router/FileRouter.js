const Router = require('koa-router');

const { avatarHandler } = require("../middleware/FileMiddleware")

const {
  saveAvatarInfo,
  getAvatarByUserId
} = require('../controller/FileController');

const fileRouter = new Router({prefix: '/upload'});

fileRouter.post('/avatar', avatarHandler, saveAvatarInfo);
fileRouter.get('/avatar/:userId', getAvatarByUserId);

module.exports = fileRouter;