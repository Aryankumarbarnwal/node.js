const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: function (re, file, cb) {
            cb(null, "FileUpload")
        },
        filename: function (re, file, cb) {
            cb(null, file.fieldname + "_" + Date.now() + ".jpg");
        }
    })
}).single("user_file");
app.post("/upload", upload, (re, res) => {
    res.send("file upload");
});

app.listen(6500);