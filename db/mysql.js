const { createPool } = require("mysql2/promise");

const pool = createPool({
  host: "localhost",
  database: "kpp",
  user: "root",
  password: "",
  connectionLimit: 10,
});

module.exports = { pool };