const express = require('express');
const app = express();

const reqFilter=(req, res, next)=>{
    if(!req.query.age){
        res.send("please provide age");
    }
    else if(req.query.age<18){
        res.send("you are under age, you cannot access this page");
    }
    else{
        next();
    }
}
app.use(reqFilter);

app.get('/', (re, res) =>{
    res.send('Welcome To My Page');
})
app.get('/users', (re, res) =>{
    res.send('welcome to users page');
})
// app.get('/about', (re, res) =>{
//     res.sendFile(`${publicPath}/about.html`);
// })
// app.get('/contact', (re, res) =>{
//     res.sendFile(`${publicPath}/contact.html`);
// })
// app.get('/login', (re, res) =>{
//     res.render('login');
// })
// app.get('*', (re, res) =>{
//     res.sendFile(`${publicPath}/nopage.html`);
// })

app.listen(5900);
