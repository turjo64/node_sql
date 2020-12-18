
const db = require('./lib/db');

const con = db.connect();

let sql ='';
sql = 'SELECT * FROM users';
con.query(sql, (err, results) => {
    if(err) throw err;
    results.forEach((user) => {
        console.log(user.id);
        console.log(user.email);
    })
});

//part 2

sql = 'SELECT * FROM users WHERE ?';
let params = {}
params = {id:3}
con.query(sql, params, (err, results) => {
    if(err) throw err;
    let user = results[0];
    console.log(`${user.first_name} : ${user.last_name}`);
 });

//  part 3

let sql = 'SELECT * FROM users LIMIT ? OFFSET ?;';
const limit = 3;
const offset = 0;
let params = [limit, offset];

con.query(sql, params, (err, results) => {
    if(err) throw err;
    results.forEach((user) => {
        console.log(user.email);
    })
});  

// params = { 'id': 5 };
// sql = 'SELECT * FROM users WHERE ?;';
// con.query(sql, params, (error, results, fields) => {
//     if (results[0]) {
//         let user = results[0];
//         console.log(`${user.id} : ${user.name} : ${user.email}`);
//     } else {
//         console.log('Not found user.');
//     }
// })

con.end();