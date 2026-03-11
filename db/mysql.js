const { createPool } = require("mysql2/promise");

const db = createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "kpp",
  connectionLimit: 12
});

module.exports = db