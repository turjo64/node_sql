const db = require('./lib/db');

//db: connect()
const con = db.connect();

const email = 'itoh@example.com';
let sql = 'DELETE FROM users WHERE email = ?;';

//let params = { email: email };
//let sql = 'DELETE FROM users WHERE ?;';
//let sql = 'DELETE FROM users;';
con.query(sql, email, (err, results) => {
    if (err) throw err;
    console.log('delete success.');
})

con.end(); 