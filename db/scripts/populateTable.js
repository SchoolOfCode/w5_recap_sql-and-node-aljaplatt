import query from "../index.js";
import cats from "../index.js";

async function populateCatsTable() {
  for (let i = 0; i < books.length; i++) {
    const name = cats[i].name;
    const human = cats[i].human;
    const hobby = cats[i].hobby;

    const res = await query(
      `INSERT INTO books (name, human, hobby) VALUES ($1, $2) RETURNING name`,
      [name, human, hobby]
    );
    console.log(res);
  }
}

populateCatsTable();
