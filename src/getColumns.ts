import * as mysql from 'promise-mysql';

require('dotenv').config();
const env = process.env;

async function connection() {
  const connection = await mysql.createConnection({
    host: env.host,
    database: env.database,
    user: env.user,
    password: env.password,
  });

  return connection;
}

let query = ``;

connection()
  .then((connection) => {
    // console.log(connection);
    const result = connection.query(query);
    connection.end();

    return result;
  })
  .then(function (rows) {
    console.log(rows);
  });
