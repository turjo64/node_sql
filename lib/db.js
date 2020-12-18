const mysql = require('mysql');
const config = require('config');
const fs = require('fs');


exports.connect = () => {
    const con = mysql.createConnection(config.mysql)
    con.connect((err) => {
        if (err) throw err;
        console.log('connect success!');
    })
    return con;
}

exports.importSQL = (filePath) => {
    if (fs.existsSync(filePath)) {
        const sql = fs.readFileSync(filePath, 'utf-8');
        const con = this.connect();
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(sql);
        });
        con.end();
    } else {
        console.log(`Not found ${filePath}`);
    }
}