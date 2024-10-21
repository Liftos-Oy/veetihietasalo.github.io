const express = require('express');
const mongoose = require('mongoose');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

// Middleware

app.use(express.json());

//PSQL connection
const pgPool = new Pool({
    user:'',
    host:'localhost',
    database:'postgres',
    password: '',
    port: 5432,
});

// MDB Connection

mongoose.connect('mongodb://localhost:27017/liftos', { useNewUrlParser: true, useUnifiedTopology: true });

// Sample route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to LiftOS API' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
