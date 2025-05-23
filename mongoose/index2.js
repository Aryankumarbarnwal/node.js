const express = require('express');
require('./config');
const product = require('./products.js');

const app = express();
app.use(express.json());

app.post("/create", async (req, res) => {
    let data = new product(req.body);
    let result = await data.save();
    console.log(result);
    res.send(result);
});

app.get("/list", async (re, res) => {
    let data = await product.find();
    res.send(data);
});

app.delete("/delete/:_id", async (re, res) => {
    console.log(re.params);
    let data = await product.deleteOne(re.params);
    res.send(data);
})

app.put("/update/:_id", async (req, res) => {
    console.log(req.params);
    let data = await product.updateOne(
        req.params,
        {
            $set: req.body
        }
    );
    res.send(data);
})

app.listen(6000);

