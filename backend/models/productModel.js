const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    imageURL:{type:String},
    name:{type:String,required:true},
    price:{type:Number,required:true},
    type:{type:String},
    currency:{type:String},
    color:{type:String},
    gender:{type:String},
    quantity:{type:Number},
},{timestamps:true});

const Product = new mongoose.model("product",productSchema);

module.exports = Product;