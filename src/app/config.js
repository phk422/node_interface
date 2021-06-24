const dotenv = require("dotenv");

// 将配置文件注入到process.env中
dotenv.config();

module.exports = {
  PORT,
  FILE_PATH
} = process.env;