const {
  POSTGRES_USER,
  POSTGRES_DATABASE,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
} = require('./config');

const Pool = require('pg').Pool;

const pool = new Pool({
  user: POSTGRES_USER,
  host: 'localhost',
  database: POSTGRES_DATABASE,
  password: POSTGRES_PASSWORD,
  port: POSTGRES_PORT,
});

module.exports = pool;
