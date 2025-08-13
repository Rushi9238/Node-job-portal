const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded({extended:true}))
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'index');
// app.set('views', './views');


// Routes starts
app.use('/', require('./routes/index.route.js'));
app.use('/', require('./routes/jobs.route.js'));
app.use('/', require('./routes/jobDetails.route.js'));

module.exports = app;