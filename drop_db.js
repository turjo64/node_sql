const mysql = require('mysql');
const config = require('config');

const con = mysql.createConnection(config.mysql);
con.connect((err) => {
    if (err) throw err;
    console.log('database droped!');
})

const sql = 'DROP DATABASE ' + config.mysql.database;

con.query(sql);

con.end(); 