'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: 'db4free.net',
    user: 'pmapp_db',
    password: 'Ye&Qlqzjzb_}',
    database: 'pmapp_db'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('Connection Established...');
});

module.exports = connection;