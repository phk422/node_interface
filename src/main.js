const { PORT } = require("./app/config");
const app = require("./app");
require("./app/database");

app.listen(PORT, () => {
  console.log(`服务已启动~端口：${PORT}`);
});
