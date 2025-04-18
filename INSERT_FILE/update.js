const dbConnect = require('../MONGODB/mongodb.js');

const updateData =async ()=>{
    const Data = await dbConnect();
    const result = await Data.updateMany(
        { name : 'Rahul Sharma'}, {
            $set : {
                name : 'Sonam Pandey',
                roll: 24
        }
    }
    )
    console.warn(result);
}
 
updateData();