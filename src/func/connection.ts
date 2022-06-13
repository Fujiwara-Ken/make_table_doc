import * as mysql from 'mysql2';
require('dotenv').config();
const env = process.env;

export const getConnection = async function connection(
  host = env.host,
  database = env.database,
  user = env.user,
  password = env.password
) {
  const connection = await mysql.createConnection({
    host,
    database,
    user,
    password,
  });

  return connection;
};
