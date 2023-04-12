require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = 8000;
const router = require("./routers/allRouters")
const {connectDB} = require("./config/db")

const app = express();

app.use(cors());
app.use(express.json());
app.use("/",router);

app.get("/",(req,res)=>{
    res.send("Home Page")
});

app.listen(PORT,async()=>{
    await connectDB()
    console.log(`Running on http://localhost:${PORT}`)
})