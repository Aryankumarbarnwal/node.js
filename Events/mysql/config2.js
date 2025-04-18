const mysql = require('mysql');
const con =  mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password:"",
    database:"test-drive"
})

con.connect((err)=>{
    if(err){
        console.warn("error is connection");
        
    }
    else{
        console.warn("connected");
    }
});

module.exports = con;