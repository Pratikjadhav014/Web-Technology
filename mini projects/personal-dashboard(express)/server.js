const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

// Add task
app.post('/tasks', (req, res) => {
    const { text } = req.body;

    db.query(
        'INSERT INTO tasks (text) VALUES (?)',
        [text],
        (err) => {
            if(err) return res.status(500).send(err);
            res.send("Task added");
        }
    );
});

// Get tasks
app.get('/tasks', (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if(err) return res.status(500).send(err);
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// Delete task
app.delete('/tasks/:id', (req, res) => {
    const id = req.params.id;

    db.query('DELETE FROM tasks WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).send(err);

        res.send("Task deleted");
    });
});