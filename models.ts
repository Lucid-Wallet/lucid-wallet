const { Pool } = require('pg');

const PG_URI:String = 'postgres://qbwjithi:SJiKjz6l68nwMdgc-NfMyYJUxU5_uk3y@chunee.db.elephantsql.com/qbwjithi';

const pool = new Pool({
  connectionString: PG_URI
});

export const db = {
  query: (text:String, params:Array<String>, callback: Function | null) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}