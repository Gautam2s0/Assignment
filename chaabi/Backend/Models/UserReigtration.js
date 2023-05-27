const mongoose=require("mongoose")

const schema=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    avtar:{type:String,require:true},   
},
{
    versionKey:false
}
) 

const RegModel=mongoose.model("users",schema)

module.exports={
    RegModel
}