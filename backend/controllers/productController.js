const Product = require("../models/productModel");

const getProducts = async(req,res)=>{
    try {
        const products = await Product.find({});
        return res.status(200).send(products)
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = getProducts;