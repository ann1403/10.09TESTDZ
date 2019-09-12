const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let indexRouter = require('./routes/index.js');
let addRouter = require('./routes/add.js');
let allRouter = require('./routes/all.js');
const app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/add', addRouter);
app.use('/all', allRouter);

module.exports = app;