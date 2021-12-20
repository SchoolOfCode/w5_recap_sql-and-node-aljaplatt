// Import query from index.js
import query from "../index.js";

// SQL string to create table
const sqlString = `CREATE TABLE IF NOT EXISTS cats (id SERIAL PRIMARY KEY, name TEXT, human TEXT, hobby TEXT)`;

// query function that creates table
// sqlString handed to query function in index.js -- as first argument (text)
async function createCatsTable() {
  const res = await query(sqlString);
  console.log("Created cats table", res);
}

createCatsTable();
