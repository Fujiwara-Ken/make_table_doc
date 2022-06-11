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

let query =
  'SELECT TABLE_CATALOG, TABLE_SCHEMA, TABLE_NAME, COLUMN_NAME , COLUMN_DEFAULT, IS_NULLABLE, DATA_TYPE, GENERATION_EXPRESSION FROM information_schema.columns WHERE table_schema = "sawallet_api_copy" ';

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
