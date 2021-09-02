const dotenv=require("dotenv");
const mongoose=require("mongoose");

dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology:true,useNewUrlParser:true},
    ()=>console.log("connected to db")
);