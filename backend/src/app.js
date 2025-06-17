require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors'); // <-- add this if not present
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const sequelize = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/tasks', taskRoutes);

// Test DB connection
sequelize.authenticate()
    .then(() => console.log('Database connected!'))
    .catch(err => console.error('Database connection error:', err));

sequelize.sync()
    .then(() => {
        console.log('Database & tables synced!');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch(err => {
        console.error('Failed to sync database:', err);
    });