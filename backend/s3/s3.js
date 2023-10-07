const {
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} = require('@aws-sdk/client-s3');
const { v4: uuidv4 } = require('uuid');

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;
const Bucket = process.env.AWS_S3_BUCKET;

const s3 = new S3Client({
  credentials: { accessKeyId, secretAccessKey },
  region,
});

const postsPictureToS3 = async ({ file, slug }) => {
  const Key = `forumPictures/${slug}/${uuidv4()}`;

  const command = new PutObjectCommand({
    Bucket,
    Key,
    Body: file.buffer,
    ContentType: file.mimetype,
  });

  try {
    await s3.send(command);
    return { success: true, payload: Key };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      payload: `Error sending a file to AWS S3. ${error}`,
    };
  }
};

const usersPictureToS3 = async ({ file, userAuthId }) => {
  const Key = `profilePictures/${userAuthId}/${uuidv4()}`;
  // const Key = `${userAuthId}/${new Date().toISOString()}`;

  const command = new PutObjectCommand({
    Bucket,
    Key,
    Body: file.buffer,
    ContentType: file.mimetype,
  });

  try {
    await s3.send(command);
    return { success: true, payload: Key };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      payload: `Error sending a file to AWS S3. ${error}`,
    };
  }
};

const getUserImagesInfo = async (userAuthId) => {
  try {
    const command = new ListObjectsV2Command({
      Bucket,
      Prefix: `profilePictures/${userAuthId}`,
    });

    const { Contents = [] } = await s3.send(command);

    Contents.sort(
      (a, b) => new Date(b.LastModified) - new Date(a.LastModified)
    ).map((image) => image.Key);

    return { success: true, payload: Contents };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

module.exports = {
  postsPictureToS3,
  usersPictureToS3,
  getUserImagesInfo,
};
