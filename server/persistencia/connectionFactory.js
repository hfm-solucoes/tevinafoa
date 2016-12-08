var mysql = require('mysql');

function createDBConnection(){
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '12345',
		database: 'tevinafoa'
	});
}

module.exports = function(){
	return createDBConnection;
}