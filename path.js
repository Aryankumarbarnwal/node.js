const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'files');
// console.log(dirPath);
// for(i=0;i<5;i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt", "this is a simple file");
// }

fs.readdir(dirPath,(err,files) =>{
    files.forEach((item)=> {
        console.log("file name is :",item);
    });
});
