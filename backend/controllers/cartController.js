
const Cart = require("../models/cartModel");


const getCartProduct = async (req, res) => {
    const {Id}=req.body;
  try {
    let items = await Cart.find({
      Id
    }).populate(["user", "product"]);
    return res.send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const addCartProduct = async (req, res) => {
  const {Id}=req.body;
  try {
    let cartItem = await Cart.findOne({
      userId: Id,
      user:req.userId,
      product: req.body.product,
    }).populate("product");

    if (cartItem) {
      let item = await Cart.findByIdAndUpdate(
        cartItem.id,
        {
          quantity: req.body.quantity,
        },
        {
          new: true,
        }
      ).populate("product");
      return res.send(item);
    } else {
      let item = await Cart.create({
        ...req.body,
        quantity:1
      });
      return res.send(item);
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const updateCartProduct = async(req,res)=>{
  let {id}=req.params;
  try{
      let cart=await Cart.findByIdAndUpdate(id,{...req.body},{new:true});
      return res.status(201).send(cart);
  }
  catch (e) {
    return res.status(500).send(e.message);
  }
};

const deleteCartProduct = async(req,res)=>{
  let {id}=req.params;
    try{
        await Cart.deleteOne({_id:id});
        res.status(204).send("Product Deleted");
    }
    catch(e){
        res.status(400).send(e.message);
    }
};

// app.get('/:id',async(req,res)=>{
//   let {id}=req.params;
//   try{
//     let item=await Cart.find({Id:id}).populate("product");
//     res.status(201).send(item);
//   }
//   catch(e){
//     res.status(401).send(e.message);
//   }
// })

module.exports = {getCartProduct,addCartProduct,updateCartProduct,deleteCartProduct};

