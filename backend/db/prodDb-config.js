require('dotenv').config();
const pgp = require('pg-promise')();

const connectionString = process.env.DATABASE_URL;
const db = pgp(connectionString);

module.exports = db;
