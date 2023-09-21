require('dotenv').config();
const pgp = require('pg-promise')();

DATABASE_URL = process.env.DATABASE_URL;

const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
};

const db = pgp(cn);

module.exports = db;
