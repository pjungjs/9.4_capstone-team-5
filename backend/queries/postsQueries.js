const db = require('../db/dbConfig.js');

/** User's Posts
 * GET all from all users
 * GET all from one user
 * GET one
 * CREATE
 * UPDATE - update the post's category and content
 * UPDATE - update the post's likes
 * UPDATE - update the post's comments
 * DELETE
 */
const getAllPosts = async () => {
  try {
    const allPosts = await db.any('SELECT * FROM posts;');
    return { success: true, payload: allPosts };
  } catch (error) {
    return { success: false, payload: error };
  }
};

const getUserPosts = async (userAuthId) => {
  try {
    const userPosts = await db.oneOrNone(
      'SELECT * FROM posts WHERE user_auth_id = $1;',
      userAuthId
    );
    return { success: true, payload: userPosts };
  } catch (error) {
    return { success: false, payload: error };
  }
};

const getOnePost = async (slug) => {
  try {
    const onePost = await db.one('SELECT * FROM posts WHERE slug = $1;', slug);
    return { success: true, payload: onePost };
  } catch (error) {
    return { success: false, payload: error };
  }
};

const createPost = async (postToCreate) => {
  const { created_at, user_auth_id, title, slug, category, post_picture_url, content } =
    postToCreate;
console.log(postToCreate)
  try {
    const createdPost = await db.one(
      'INSERT INTO posts (created_at, user_auth_id, title, slug, category, post_picture_url, content) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;',
      [created_at, user_auth_id, title, slug, category, post_picture_url, content]
    );
    console.log(createdPost)
    return { success: true, payload: createdPost };
  } catch (error) {
    console.log(error)
    return { success: false, payload: error };
  }
};

//update post's category and content by unique slug
const updatePost = async (slug, postToUpdate) => {
  const { category, content } = postToUpdate;

  try {
    const updatedPost = await db.one(
      'UPDATE posts SET category = $1, content = $2 WHERE slug = $3 RETURNING *;',
      [category, content, slug]
    );
    return { success: true, payload: updatedPost };
  } catch (error) {
    return { success: false, payload: error };
  }
};

//update post's likes by unique slug
const updatePostLikes = async (slug, likesToUpdate) => {
  // data format to send on the body: an object of "user_id" and "liked_at".
  //add one like at a time to the existing data
  //same user cannot like twice. add like if the user didn't like already, but if it did, remove the like.
  //e.g.: { "user_id": "user-test-fc7a7585-6dc3-4acb-b49d-8fb6b103ceba", "liked_at": "2023-09-10T12:00:00Z" }

  try {
    // First, get the existing post
    const existingPost = await db.one(
      'SELECT post_likes FROM posts WHERE slug = $1;',
      [slug]
    );

    // Find the index of the user's like in the post_likes array of object
    const userLikeIndex = existingPost.post_likes.findIndex(
      (like) => like.user_id === likesToUpdate.user_id
    );

    let queryCommand = '';
    let queryParam = [slug];

    if (userLikeIndex === -1) {
      // User has not liked the post, add the like
      queryCommand =
        'UPDATE posts SET post_likes = post_likes || $1 WHERE slug = $2 RETURNING *;';
      queryParam.unshift(likesToUpdate);
    } else {
      // User has already liked the post, remove the specific like
      queryCommand =
        "UPDATE posts SET post_likes = COALESCE( ( SELECT jsonb_agg(elem) FROM jsonb_array_elements(post_likes) AS elem WHERE elem->>'user_id' <> $1), '[]'::jsonb ) WHERE slug = $2 RETURNING *;";
      queryParam.unshift(likesToUpdate.user_id);
    }

    // Update the post with the modified post_likes array of object
    const updatedPost = await db.one(queryCommand, queryParam);
    return { success: true, payload: updatedPost };
  } catch (error) {
    return { success: false, payload: error };
  }
};

//update post's comments by unique slug
const updatePostComments = async (slug, commentsToUpdate) => {
  // data format to send on the body: an object of "user_id", "commented_at" and "content".
  //add one comment at a time to the existing data
  //e.g.: { "user_id": "user-test-fc7a7585-6dc3-4acb-b49d-8fb6b103ceba", "commented_at": "2023-09-10T12:00:00Z", "content": "Awesome" }

  try {
    const updatedComments = await db.one(
      'UPDATE posts SET post_comments = post_comments || $1 WHERE slug = $2 RETURNING *;',
      [commentsToUpdate, slug]
    );
    return { success: true, payload: updatedComments };
  } catch (error) {
    return { success: false, payload: error };
  }
};

//delete a post by unique slug
const deletePost = async (slug) => {
  try {
    const deletedPost = await db.one(
      'DELETE FROM posts WHERE slug = $1 RETURNING *;',
      slug
    );
    return { success: true, payload: deletedPost };
  } catch (error) {
    return { success: false, payload: error };
  }
};

module.exports = {
  getAllPosts,
  getUserPosts,
  getOnePost,
  createPost,
  updatePost,
  updatePostLikes,
  updatePostComments,
  deletePost,
};
