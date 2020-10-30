const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var path = require('path');
const mongoose = require('mongoose');
const connectDatabase = require('./database/index');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const devRouter = require('./routes/dev');

const app = express();

connectDatabase();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit:'20mb' }));
app.use(cookieParser());
app.use('/screens', express.static(path.join(__dirname, 'screens')));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dev', devRouter);

module.exports = app;
