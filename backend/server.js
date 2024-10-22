const express = require('express');
const mongoose = require('mongoose');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Import routes
const schedulerRoutes = require('./routes/scheduler');

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pgPool = new Pool({
    user: '',
    host: 'localhost',
    database: 'postgres',
    password: '',
    port: 5432,
});

// Test PostgreSQL connection
pgPool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('PostgreSQL connection error:', err);
    } else {
        console.log('PostgreSQL connected successfully');
    }
});

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/liftos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Base route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to LiftOS API' });
});

// API Routes
app.use('/api/scheduler', schedulerRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : {}
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Handle process termination
process.on('SIGINT', async () => {
    await pgPool.end();
    await mongoose.connection.close();
    process.exit(0);
});