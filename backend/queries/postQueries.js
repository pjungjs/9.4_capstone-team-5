const db = require('../db/dbConfig.js');

/** User's Achievements
 * GET all
 * GET one
 * UPDATE
 */
const getPosts = async () => {
    try {
      const allPosts = await db.any('SELECT * FROM posts;');
      return { success: true, payload: posts };
    } catch (error) {
      return {
        success: false,
        payload: `Error. ${error}`,
      };
    }
  };