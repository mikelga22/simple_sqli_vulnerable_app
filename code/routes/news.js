const jwt = require('../utils/jwt');
const express = require('express');
const db = require('../utils/database');

const router = express.Router();

//get news page
router.get('/news', (req, res) => {
	jwt.verify(req.session.token, (err, decoded)=>{
		if(err){
			res.redirect('/login');
		}

		else{
			if(req.query.id){
				db.query(`SELECT * FROM news where id=${req.query.id}`, (err,rows) => {
					if(err || rows.length <= 0) {
						res.redirect('/news');
					}	
					res.render('new', {new: rows});
				});
			}

			else{
				db.query('SELECT title,id FROM news', (err,rows) => {
					if(err) {
						res.redirect('/news');
					}	
					res.render('main', {news: rows});
				});
			}
		}
	});
});

module.exports = router;