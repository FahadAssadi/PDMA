const express = require("express");
const session = require('express-session');
const router = require('./router.js');
const path = require('path');
const morgan = require('morgan');

// Setup the databases
require('./backend/config/mongoose-setup');
require('./backend/config/firebase-setup');

// Setup the express app
/**
 * Initializes the Express application.
 * @constant {Object}
 */
const app = express();

const PORT = 8080;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, './frontend/views'));

app.engine('html', require('ejs').renderFile);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use(session({
    secret: '33328366',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(express.static("node_modules/bootstrap/dist/css"));
app.use('/public', express.static(path.join(__dirname, './frontend/public')));
app.use('/', router);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));