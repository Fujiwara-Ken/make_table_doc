import * as mysql from 'mysql2';
require('dotenv').config();
const env = process.env;

export const getConnection = async function connection() {
  const connection = await mysql.createConnection({
    host: env.host,
    database: env.database,
    user: env.user,
    password: env.password,
  });

  return connection;
};
