import pg from "pg";

const pool = new pg.Pool({
  user: "qwhqrkxlnymuwj",
  host: "ec2-52-49-23-139.eu-west-1.compute.amazonaws.com",
  database: "ddq66tea7pui45",
  password: "e448570a7a3634864112067057aa7ad8e93607a9ed775ca5d46d8f33643e9d3c",
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

// sqlString from createTable handed to query function in index.js -- as first argument (text)
export default function query(text, params) {
  return pool.query(text, params);
}
