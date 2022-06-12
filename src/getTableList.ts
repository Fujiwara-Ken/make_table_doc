import { getConnection } from './func/connection';

require('dotenv').config();
const env = process.env;

const connection = getConnection();

let query = `SELECT table_name FROM information_schema.tables WHERE table_schema = '${env.database}' AND table_type = 'BASE TABLE'`;

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
