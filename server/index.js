const express = require('express');
var cors = require('cors')
const mysql = require('mysql');
const bodyParser = require('body-parser'); // Middleware to parse JSON bodies
const app = express();
const port = 3000;

app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mernhello'
});



// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to MySQL
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
});

// Handle GET requests
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// Handle POST requests
app.post('/add-data', (req, res) => {
    console.log("incoming data");
    const { name, email, phone, job } = req.body;

    if (!name || !email || !phone || !job) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const query = 'INSERT INTO your_table_name (name, email, phone, job) VALUES (?, ?, ?, ?)';
    const values = [name, email, phone, job];

    connection.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting data: ', err);
            return res.status(500).json({ error: 'Failed to insert data.' });
        }

        res.json({ message: 'Data inserted successfully.' });
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
