const express = require("express");
const path = require('path');
const morgan = require('morgan');

// Setup the databases
require('./config/database/mongoose-setup');
require('./config/database/firebase-setup');

// Setup the express app
/**
 * Initializes the Express application.
 * @constant {Object}
 */
require('dotenv').config();
const app = express();
const PORT = 8080;

// Socket.io setup
const server = require('http').Server(app);
require('./config/socket.io/socket.io')(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '../dist/pdma/browser')));
app.use(express.static(path.join(__dirname, '../public')));

// Setup the routes
app.use('/api', require('./routers/router'));

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
