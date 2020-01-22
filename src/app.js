const express = require('express');
const path = require('path');
const cors = require('cors');

const router = require('./router');
const { connect } = require('./sockets');
const app = express();
const server = require('http').Server(app);

// require('./database');

app.use(cors());
app.use('/public', express.static(path.join(__dirname, './public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connect(server);
router(app);

module.exports = server;