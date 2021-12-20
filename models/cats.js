import query from "../db/index.js";

export async function getAllCats() {
  const data = await query(`SELECT * FROM cats;`);
  return data.rows;
}

// $1 - node/pg go and look in the params array(second argument), for the first item and insert here
export async function getCatByID(id) {
  const data = await query(`SELECT * FROM cats WHERE id = $1;`, [id]);
  return data.rows;
}

export async function getCatByName(name) {
  const data = await query(
    `SELECT * FROM cats WHERE name ILIKE '%' || $1 || '%', [name]`
  );
  return data.rows;
}
