const Usr=require("../model/Usr");

const usr_all=async (req,res) =>{
    try{
        const usrs=await Usr.find();
        res.json(usrs);
    }catch(error){
        res.json({message: error});
    }
};

const usr_one=async (req,res) =>{
    try{
        const usr= await Usr.findById(req.params.usrId);
        res.json(usr);
    }catch(error){
        console.log({message : error});
    }
}

module.exports={usr_all
,usr_one}