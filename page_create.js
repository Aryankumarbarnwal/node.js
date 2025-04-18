const express = require('express');

const app = express();

app.get('', (req, res)=>{
    console.log("data is sent by browser => ",req.query.name);
    res.send(`<h1>Welcome to jhaatu world</h1>
        <a href="/about">Go to About page </a>
        `);
});
app.get('/about', (req, res)=>{
    res.send(`
        <input type="text" placeholder="name" value="${req.query.name}"/>
        <button>click me</button>
        <a href="/">Go to Home page </a>
        `);

});
app.get('/contact', (req, res)=>{
    res.send('hii, This is contact page');
});

app.listen(6500);