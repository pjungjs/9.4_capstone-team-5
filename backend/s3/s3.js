const {
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} = require('@aws-sdk/client-s3');
const { v4: uuidv4 } = require('uuid');

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;
const bucket = process.env.AWS_S3_BUCKET;

const s3 = new S3Client({
  credentials: { accessKeyId, secretAccessKey },
  region,
});

const uploadToS3 = async ({ file, userAuthId }) => {
  const key = `profilePictures/${userAuthId}/${uuidv4()}`;
  // const key = `${userAuthId}/${new Date().toISOString()}`;

  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
  });

  try {
    await s3.send(command);
    return { success: true, payload: key };
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
      Bucket: bucket,
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
  uploadToS3,
  getUserImagesInfo,
};
