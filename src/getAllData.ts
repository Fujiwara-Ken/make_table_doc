import { getConnection } from './func/connection';

require('dotenv').config();
const env = process.env;

const connection = getConnection();

let query = `SELECT TABLE_CATALOG, TABLE_SCHEMA, TABLE_NAME, COLUMN_NAME , COLUMN_DEFAULT, IS_NULLABLE, DATA_TYPE, GENERATION_EXPRESSION FROM information_schema.columns WHERE table_schema = '${env.database}' `;

const execQuery = async () => {
  try {
    (await connection).query(query, (err, rows) => {
      if (err) throw err;
      console.log('test_userテーブル: ', rows);
    });
    (await connection).end();
  } catch (e) {
    console.log(e);
  } finally {
    console.log('終了');
  }
};

execQuery();
