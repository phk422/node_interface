const Multer = require('koa-multer');
const {FILE_PATH} = require('../app/config');

const avatarUpload = Multer({
  dest: FILE_PATH
});
const avatarHandler = avatarUpload.single('avatar');

module.exports = {
  avatarHandler
}