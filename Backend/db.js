// here the data of teh database will be stored
const mongoose = require("mongoose");
require('dotenv').config();
const mongoURI = process.env.MONGO_URI;
const connectToMongo = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongoose sucessfully");
    })
}
module.exports = connectToMongo;