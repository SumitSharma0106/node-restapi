const mongoose=require('mongoose');

const usrSchema=new mongoose.Schema({
    _id: String,
    usr_id:String,
    first_name:String,
    middle_name:String,
    last_name: String,
    email:String,
    account_active : Boolean,
    create_ts:String,
    created_by:String,
    update_ts:String,
    modified_by:String    
}, {

    versionKey: false // You should be aware of the outcome after set to false

});

module.exports=mongoose.model("Usr",usrSchema);