const mysql = require('mysql');

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456789',
	database: 'mydb'
});

db.connect((err) => {
	if (err) throw err;
	console.log('Connected to database');
});

module.exports = db;