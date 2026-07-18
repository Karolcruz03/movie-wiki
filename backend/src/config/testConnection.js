require("dotenv").config();
const pool = require("./database");

async function testConnection() {
  try {
    const result = await pool.query("SELECT NOW()");

    console.log("✅ Database connected");
    console.log(result.rows[0]);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error connecting to database:");
    console.error(error);
    process.exit(1);
  }
}

testConnection();