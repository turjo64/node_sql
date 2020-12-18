const db = require('./lib/db');

const con = db.connect();

const first_name ='Steve';
const last_name='Halder';
const id=1;
let params=[first_name,last_name,id];

const sql = 'UPDATE users SET first_name=?,last_name=? WHERE ?';
con.query(sql, params, (err, results) => {
    if (err) throw err;
    console.log(results);
    console.log('update success.');
})

con.end(); 