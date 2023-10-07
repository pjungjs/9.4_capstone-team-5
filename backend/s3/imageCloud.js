const express = require('express');
const multer = require('multer');
const imageCloud = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

const {
  postsPictureToS3,
  usersPictureToS3,
  getUserImagesInfo,
} = require('./s3.js');

// upload the Post's picture to AWS S3
imageCloud.post('/post/:slug', upload.single('image'), async (req, res) => {
  const { file } = req;
  const { slug } = req.params;

  if (!file || !slug) {
    return res
      .status(400)
      .json({ error: 'Bad request. Error with the File or slug.' });
  }

  const { success, payload } = await postsPictureToS3({ file, slug });

  if (success) {
    res.status(200).json(payload);
  } else {
    res.status(400).json({
      error: `Error uploading a file to AWS S3. ${payload}`,
    });
  }
});

// upload the User's profile picture to AWS S3
imageCloud.post(
  '/user/:userAuthId',
  upload.single('image'),
  async (req, res) => {
    const { file } = req;
    const { userAuthId } = req.params;

    if (!file || !userAuthId) {
      return res
        .status(400)
        .json({ error: 'Bad request. Error with the File or user_auth_id.' });
    }

    const { success, payload } = await usersPictureToS3({ file, userAuthId });

    if (success) {
      res.status(200).json(payload);
    } else {
      res.status(400).json({
        error: `Error uploading a file to AWS S3. ${payload}`,
      });
    }
  }
);

// get all images of the specific User from AWS S3
imageCloud.get('/user/:userAuthId', async (req, res) => {
  const { userAuthId } = req.params;

  if (!userAuthId) {
    return res
      .status(400)
      .json({ error: 'Bad request. Error the user_auth_id.' });
  }

  const { success, payload } = await getUserImagesInfo(userAuthId);

  if (success) {
    res.status(200).json(payload);
  } else {
    res.status(400).json({
      error: `Error getting a file to AWS S3. ${payload}`,
    });
  }
});

module.exports = imageCloud;
