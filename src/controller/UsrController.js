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
};


const usr_add= async (req,res) =>{
    const usr= new Usr({
        _id:req.body._id,
        usr_id:req.body.usr_id,
        first_name:req.body.first_name,
        middle_name:req.body.middle_name,
        last_name:req.body.last_name,
        email:req.body.email,
        account_active:req.body.account_active,
        create_ts:req.body.create_ts,
        created_by:req.body.created_by,
        update_ts:req.body.update_ts,
        modified_by:req.body.modified_by
    });
    try{
        const addUsr=await usr.save();
        res.send(addUsr);
        console.log("User added into DB " + addUsr.first_name);
    }catch(error){
        res.status(400).send(error);
        console.log({message : error});
    }
};


// const usr_update= async(req,res) =>{
//     try{
//     const usr= new Usr({
//         _id:req.body._id,
//         usr_id:req.body.usr_id,
//         first_name:req.body.first_name,
//         middle_name:req.body.middle_name,
//         last_name:req.body.last_name,
//         email:req.body.email,
//         account_active:req.body.account_active,
//         create_ts:req.body.create_ts,
//         created_by:req.body.created_by,
//         update_ts:req.body.update_ts,
//         modified_by:req.body.modified_by
//     });
    
//         const updateUsr= await Usr.findByIdAndUpdate(
//             {_id:req.params.usr_id}
//             ,usr
//         );
//         res.json(updateUsr)
//     }catch(error){
//         res.status(400).send(error);
//         console.log({message : error});
//     }
// };

module.exports={usr_all
,usr_one
,usr_add
,usr_update}