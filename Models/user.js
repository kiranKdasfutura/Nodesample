const mongoose=require('mongoose')

const Userschema=new mongoose.Schema({
    name:{type:String,require:true},
    age:{type:String,require:true},
} ,{timestamps:true});

module.exports =mongoose.model('user',Userschema)