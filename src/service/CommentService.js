const connection = require('../app/database');
const facker = require("faker");

class CommentService {
  /**
   * 添加评论
   * @param {*} content 
   * @param {*} userId 
   * @param {*} avatar 
   * @returns 
   */
  async create(content, userId, avatar) {
    const sql = `INSERT INTO comment (content, user_id, avatar) VALUES (?, ?, ?);`;
    const [result] = await connection.execute(sql, [content, userId, avatar]);
    return result;
  }

  /**
   * 追加评论
   * @param {*} content 
   * @param {*} userId 
   * @param {*} parentId 
   * @returns 
   */
  async addChildComment(content, userId, parentId) {
    const sql = `INSERT INTO comment (content, user_id, parent_id) VALUES (?, ?, ?);`;
    const [result] = await connection.execute(sql, [content, userId, parentId]);
    return result;
  }

  /**
   * 获取所有评论
   * @returns 
   */
  async getComment() {
    const sql = 'SELECT a.*, b.name FROM comment a JOIN user b ON a.user_id = b.id ORDER BY updateAt DESC;';
    const result = await connection.execute(sql);
    const chs = []
    const parent = result[0].filter(item => {
      item.avatarUrl = facker.image.avatar();
      if (!item.parent_id) {
        return true;
      } else {
        chs.push(item);
        return false;
      }
    })
    return parent.map(item => {
      const children = []
      for(const i of chs) {
        if (item.id === i.parent_id) {
          children.push(i);
        }
      }
      return {
        ...item,
        children
      }
    });
  }
}

module.exports = new CommentService();