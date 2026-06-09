// import mysql from 'mysql2';

// let db_conn = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'root',
//     database:'company',
//     port:3306
// });

// db_conn.connect((err) => {
//     console.log('Connected to the database!');
//     db_conn.query('SELECT * FROM employees', (err, results) => {
//         console.log('Query results:', results);
//         db_conn.end();
//         console.log('Database connection closed.');
//     });
// });


import mysql from "mysql2/promise";

export async function getUsers() {
  let connection;

  try {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "company",
    });

    const [rows] = await connection.execute(
      "SELECT * FROM employees;"
    );
    console.log(rows)
    return rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw error;
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
getUsers();