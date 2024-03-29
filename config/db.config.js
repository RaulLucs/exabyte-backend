require("dotenv").config();
module.exports = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  db: process.env.DB || "postgres",
  dialect: process.env.DB_DIALECT || "postgres",
  isProduction: process.env.NODE_ENV === "production",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
