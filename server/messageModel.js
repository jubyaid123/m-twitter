const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'Mtwitter',
  password: '508abc123',
  port: 5432,
});

const createMessage = async (messageData) => {
  const { user_id, content, keywords } = messageData;
  try {
    const result = await pool.query(
      'INSERT INTO messages (user_id, content, keywords) VALUES ($1, $2, $3) RETURNING *',
      [user_id, content, keywords]
    );
    return result.rows[0];
  } catch (err) {
    throw err;
  }
};

const updateLikes = async (messageId, increment = true) => {
  try {
    const result = await pool.query(
      `UPDATE messages SET likes = likes ${increment ? '+' : '-'} 1 WHERE id = $1 RETURNING *`,
      [messageId]
    );
    return result.rows[0];
  } catch (err) {
    throw err;
  }
};

const updateDislikes = async (messageId, increment = true) => {
  try {
    const result = await pool.query(
      `UPDATE messages SET dislikes = dislikes ${increment ? '+' : '-'} 1 WHERE id = $1 RETURNING *`,
      [messageId]
    );
    return result.rows[0];
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createMessage,
  updateLikes,
  updateDislikes,
};
