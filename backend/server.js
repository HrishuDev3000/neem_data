const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "sys",
    password: process.env.DB_PASS
});


db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + db.threadId);
});


app.get('/', (req, res) => {
    res.json("From Backend Side");
});

app.get('/sys', (req, res) => {
    const sql = "SELECT * FROM neem_formulation";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing MySQL query: ' + err.stack);
            return res.status(500).json({ error: 'Error executing MySQL query' });
        }
        res.json(data);
    });
});


const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
