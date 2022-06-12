import { getConnection } from './func/connection';

require('dotenv').config();
const env = process.env;

const connection = getConnection();

let query = `SELECT TABLE_CATALOG, TABLE_SCHEMA, TABLE_NAME, COLUMN_NAME , COLUMN_DEFAULT, IS_NULLABLE, DATA_TYPE, GENERATION_EXPRESSION FROM information_schema.columns WHERE table_schema = '${env.database}' `;

connection
  .then((connection) => {
    // console.log(connection);
    const result = connection.query(query);
    connection.end();

    return result;
  })
  .then(function (rows) {
    console.log(rows);
  });
