import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
const PORT = 9000; // Use the same port for app.listen

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "project_database"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.post("/login", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "Please provide all fields" });
    }

    const newUser = { name, email, password };
    db.query("INSERT INTO logintable SET ?", newUser, (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).json({ error: "Failed to create user", details: err.message });
        }
        console.log("User created:", result);
        res.status(201).json({ message: "User created successfully" });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});