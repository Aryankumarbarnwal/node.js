const express = require('express');
require('./config');
const product = require('./products.js');

const app = express();
app.use(express.json());

app.get("/search/:key", async (re, res) => {
    console.log(re.params.key);
    let data = await product.find(
        {
            "$or": [
                {
                    "name": { $regex: re.params.key },
                    "name": { $regex: re.params.key }
                }
            ]
        }
    )
    res.send(data);

})


app.listen(6500);