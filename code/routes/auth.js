const jwt = require('../utils/jwt');
const express = require('express');
const db = require('../utils/database');

const router = express.Router();

router.get('/', (req, res) => {
	if(req.session.token){
		res.redirect('/news');
	}
	else{
		res.redirect('/login');
	}
});

//render login page
router.get('/login', (req, res) => {
	res.render('login');
});

//login
router.post('/login', (req, res) => {
	db.query(`SELECT * FROM users where email="${req.body.email}" and password="${req.body.password}"`, (err,rows) => {
		if(err) {
			res.send('Error');
		}

		if(rows.length !==0){
			req.session.token = jwt.get(req.body.email);
			res.redirect('/news');
		}
		else{
			res.redirect('/login');
		}
	});
});

//logout
router.post('/logout', (req, res) => {
	req.session.destroy();
	res.redirect('/login');
});

module.exports = router;