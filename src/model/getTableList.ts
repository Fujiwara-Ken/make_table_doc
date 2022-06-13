import { getConnection } from '../func/connection';

require('dotenv').config();
const env = process.env;
const connection = getConnection();

let query = `SELECT table_name FROM information_schema.tables WHERE table_schema = '${env.database}' AND table_type = 'BASE TABLE'`;

const execQuery = async () => {
  try {
    (await connection).execute(query, (err, rows) => {
      if (err) throw err;
      console.log('テーブル一覧', rows);
    });
    
    (await connection).end();
  } catch (e) {
    console.log(e);
  } finally {
    console.log('終了');
  }
};

execQuery();
