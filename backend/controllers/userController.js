const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.secret_key;

const signupAPI =async(req,res)=>{
  const {name,email,password} = req.body;
  try {
    const user = await User.findOne({email});
    if(user){
      return res.status(401).send("User Already Exists")
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = await User.create({name,email,password:hashedPassword});
    newUser.save();
    return res.status(200).send("Account Created Successfully")
  } catch (error) {
    return res.status(500).send(error.message)
  }
};

const signinAPI = async(req,res)=>{
    const {email,password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(403).send("User Not Exists")
        }
        const match = bcrypt.compareSync(password,user.password);
        if(!match){
            return res.status(403).send("Invalid Password")
        };

        const accessToken = jwt.sign({id:user._id},SECRET_KEY,{expiresIn:"60min"});

        return res.status(200).send({message:"LogIn Successfully",accessToken,email:user.email})
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = {signupAPI,signinAPI}