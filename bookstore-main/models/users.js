const mongoose=require('mongoose');
const userShema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    cart:[]
})
const model=mongoose.model('user',userShema)
module.exports=model