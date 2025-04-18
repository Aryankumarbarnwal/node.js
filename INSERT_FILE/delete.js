const dbConnect = require('../MONGODB/mongodb.js');

const DeleteData =async ()=>{
    const Data = await dbConnect();
    const result = await Data.deleteMany(
        { name : 'Sonam Pandey'}
    )
    console.warn(result);
    if(result.acknowledged){
        console.log("Record deleted");
    }
}
 
DeleteData();