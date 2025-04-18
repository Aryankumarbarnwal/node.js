const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '/public');

app.set('view engine', 'ejs');
app.get('', (re, res) =>{
    res.sendFile(`${publicPath}/index.html`);
})
app.get('/profile', (re, res) =>{
    const user={
        name : 'Aryan kumar',
        email: 'aryan@gmail.com',
        contact: '9999999',
        skills:[
            'python','c++','java','c','frontend', 'backend'
        ]
    }
    res.render('profile', {user});
})
app.get('/about', (re, res) =>{
    res.sendFile(`${publicPath}/about.html`);
})
app.get('/contact', (re, res) =>{
    res.sendFile(`${publicPath}/contact.html`);
})
app.get('/login', (re, res) =>{
    res.render('login');
})
app.get('*', (re, res) =>{
    res.sendFile(`${publicPath}/nopage.html`);
})

app.listen(5800);
