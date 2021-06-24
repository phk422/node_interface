const connection = require('../app/database');

class FileService {
  async createAvatar(filename, mimetype, size, userId) {
    const statement = `INSERT INTO avatar (filename, mimetype, size, user_id) VALUES (?, ?, ?, ?)`;
    const [result] = await connection.execute(statement, [filename, mimetype, size, userId]);
    return result;
  }

  /**
   * 根据用户id获取头像 
   * @param {*} userId 
   * @returns 
   */
  async getAvatarByUserId(userId) {
    const statement = `SELECT * FROM avatar WHERE filename = ?;`;
    const [result] = await connection.execute(statement, [userId]);
    return result.pop();
  }
}

module.exports = new FileService();
