const dbConnect = require('../MONGODB/mongodb.js');

const insert =async ()=>{
    const db = await dbConnect();
    const result = await db.insertMany(
        [{
            name : 'Rahul Sharma',
            roll : 23,
            contact : 999999,
            gender : 'male'
        },
        {
            name : 'NavNeet kaur',
            roll : 24,
            contact : 999999,
            gender : 'female'
        }]

    )
    // console.log(result);
}
 
insert();