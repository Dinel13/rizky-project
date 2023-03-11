const mysql = require("mysql2");

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  waitForConnections: false,
  connectionLimit: 50,
  connectTimeout: 60000, // 20 seconds
  queueLimit: 5,
});

