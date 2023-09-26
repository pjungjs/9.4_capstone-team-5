require('dotenv').config();
const pgp = require('pg-promise')();

const cn = (process.env.DEPLOYED === 'true')
  ? {
      connectionString: process.env.DATABASE_URL,
    }
  : {
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      database: process.env.PG_DATABASE,
      user: process.env.PG_USER,
    };

const db = pgp(cn);

module.exports = db;
