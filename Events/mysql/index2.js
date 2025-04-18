const express = require('express');
const con = require("./config2");
const app = express();


app.get("/", (req, res) => {
    con.query("SELECT * FROM `users`", (err, result) => {
        if (err) {
            console.log(err);
            res.send("Error Occured");
        }
        else {
            res.send(result);
        }
    })
});
app.post("/", (req, res) => {
    const data = {
        empId : 20,
        emapName : "NAMASTEY",
        Branch : "CSE",
        PerformanceOutOf100 : 99
    }
    con.query('Insert INTO users SET ? ', data, (error, result, feild) => {
        if(error) error;
        res.send(result);
    });
});

app.listen(5000);