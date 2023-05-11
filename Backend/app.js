const express = require('express');
const { connect } = require('./db');
const studentsRouter = require('./studentsRouter');

const app = express();
const port = 3001;

// Middleware
app.use(express.json());

// Connect to the database
connect();

// Routes
app.use('/students', studentsRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


