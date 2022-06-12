import { getConnection } from './func/connection';

require('dotenv').config();
const env = process.env;
const connection = getConnection();

let query = `SELECT table_name FROM information_schema.tables WHERE table_schema = '${env.database}' AND table_type = 'BASE TABLE'`;

(async () => {
  try {
    await mysqlPromise.beginTransaction(connection);
    const results = await mysqlPromise.query(connection, 'INSERT INTO posts (content) VALUES (?)', ['Hello!']);
    var log = 'Post ' + results.insertId + ' added';
    await mysqlPromise.query(connection, 'INSERT INTO logs (message) VALUES (?)', log);
    await mysqlPromise.commit(connection);
  } catch (err) {
    await mysqlPromise.rollback(connection, err);
  } finally {
    connection.end();
  }
})().catch((err) => {
  console.error(err);
});