const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    Name:String,
    Mobilenumber:Number,
    Email:String
},{timestamps:true})

module.exports = mongoose.model("users", userSchema)
