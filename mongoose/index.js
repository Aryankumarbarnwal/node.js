// crud with mongoose 
// create API with mongoose

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-comm");
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number
});
// Save In Database by calling SaveInDb() 
const SaveInDb = async () => {
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = new ProductsModel({ name: "m8", price: 1200 });
    let result = await data.save();
    console.log(result);
}

// update In Database by calling updateInDb() 
const updateInDb = async () => {
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = await ProductsModel.updateOne(
        { name: "m8" }, { $set: { price: 1100 } }
    )
    console.log(data);
}

// delete In Database by calling deleteInDb() 
const deleteInDb = async () =>{
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = await ProductsModel.deleteOne({name:"m8"});
    console.log(data);
}

// find Data In Database by calling findInDb() 
const findInDb = async ()=>{
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = await ProductsModel.find({name:"SonaLika"});
    console.log(data);
} 

findInDb();
