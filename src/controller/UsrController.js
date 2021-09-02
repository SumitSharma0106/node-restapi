const Usr=require("../model/Usr");

const usr_all=async (req,res) =>{
    try{
        const usrs=await Usr.find();
        res.json(usrs);
    }catch(error){
        res.json({message: error});
    }
};

module.exports={usr_all}