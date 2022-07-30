import * as mysql from 'mysql2';
require('dotenv').config({ debug: true });
const env = process.env;

console.log(env.host);
console.log(env.database);
console.log(env.user);
console.log(env.password);

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
