const express = require("express");
const session = require('express-session');
const path = require('path');
const morgan = require('morgan');

// Setup the databases
require('./config/mongoose-setup');
require('./config/firebase-setup');

// Setup the express app
/**
 * Initializes the Express application.
 * @constant {Object}
 */
const app = express();

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use(session({
    secret: '33328366',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(express.static(path.join(__dirname, '../dist/pdma/browser')));

// Setup the routes
app.use('/api', require('./routers/router'));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));