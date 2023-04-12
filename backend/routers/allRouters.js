const express = require("express");
const { getCartProduct, addCartProduct, updateCartProduct, deleteCartProduct } = require("../controllers/cartController");
const getProducts = require("../controllers/productController");
const { signupAPI, signinAPI } = require("../controllers/userController");
const authMiddleware = require('../AuthMiddleware/authMiddleware')
const Router = express.Router();

Router.post("/signup",signupAPI);
Router.post("/signin",signinAPI);

Router.get("/getProducts",getProducts);

Router.get("/cartProduct", getCartProduct)
Router.post("/addProduct",addCartProduct)
Router.put("/updateProduct/:id",updateCartProduct)
Router.delete("/deleteProduct/:id",deleteCartProduct)

module.exports = Router;