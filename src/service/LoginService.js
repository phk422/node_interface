const connection = require('../app/database');

class UserService {
  async findUser(name, password) {
    const sql = `SELECT * FROM USER WHERE name = ? and password = ?`;
    const result = await connection.execute(sql, [name, password]);
    return result[0]
  }
}

module.exports = new UserService();