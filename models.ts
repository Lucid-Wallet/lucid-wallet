const { Pool } = require('pg');

const PG_URI:String = `${process.env.DB_STRING}`;

const pool = new Pool({
  connectionString: PG_URI
});

export const db = {
  query: (text:String, params:Array<String>, callback: Function | null) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}