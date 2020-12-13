const jwt = require('jsonwebtoken');

const PRIVATE_KEY = 'tokenkey';

var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

exports.get = (user) => {
	return jwt.sign({ user: user }, PRIVATE_KEY);
}

exports.verify = (token, callback) => {
	jwt.verify(token, PRIVATE_KEY, callback);
}