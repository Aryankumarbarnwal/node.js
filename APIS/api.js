const express = require('express');
const dbConnect = require('../MONGODB/mongodb.js');
const mongodb = require('mongodb');

const app = express();

app.use(express.json());

app.get('/',async (re, res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    // console.log(data);
    res.send({data});
});

app.post('/', async (re, res)=>{
    let data = await dbConnect();
    let result = await data.insertOne(re.body);

    res.send(result);
})

app.put('/:name', async (req, res)=>{
    let data = await dbConnect();
    let result =  data.updateOne(
        {name:req.params.name}, {$set:req.body}
    );

    // console.log(re.body);
    res.send({result : "update"});
})

app.delete('/:id', async (req, res)=>{
    const data = await dbConnect();
    const result =  data.deleteOne(
        {_id: new mongodb.ObjectId(req.params.id)}
    );

    // console.log(re.body);
    res.send("Done");
})

app.listen(5500);