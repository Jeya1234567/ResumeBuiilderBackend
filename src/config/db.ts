import mysql from 'mysql2/promise'; 

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'meg$123',
  database: process.env.DB_NAME || 'resume_db',
  waitForConnections: true,
  connectionLimit: 10
});

export const checkDBConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("✅ Database connected successfully");
    connection.release();
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
};

export default pool;