const express = require('express')
const bodyParser = require('body-parser');
const session = require('express-session');
const mustacheExpress = require('mustache-express');

const auth = require('./routes/auth');
const news = require('./routes/news');

const app = express();

app.use(session({
	secret: 'thisissecret',
	resave: false,
	saveUninitialized: true
}));


app.set('views', `${__dirname}/views`);
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());
app.use (bodyParser.urlencoded( {extended : true} ) );


app.use('/', auth);
app.use('/', news);



app.listen(8000, () => {
	console.log('Listening on port 8000');
});