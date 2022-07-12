const { Pool } = require('pg');

const PG_URI:String = 'postgres://qbwjithi:SJiKjz6l68nwMdgc-NfMyYJUxU5_uk3y@chunee.db.elephantsql.com/qbwjithi';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text:String, params:Array<String>, callback:Function) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}