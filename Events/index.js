const express = require('express');
const EventEmitter = require('events');

const app = express();
const event = new EventEmitter();
let count = 0;

event.on("countApi", () => {
    count++;
    console.log("event called ", count);
})
app.get("/", (re, res) => {
    res.send("api called");
    event.emit("countApi");
});

app.get("/search", (re, res) => {
    res.send("search api called");
    event.emit("countApi");
});

app.get("/update", (re, res) => {
    res.send("update api called");
    event.emit("countApi");
})

app.listen(5500);
