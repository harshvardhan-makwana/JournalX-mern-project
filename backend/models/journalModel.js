const mongoose = require("mongoose");
const User=require("./user")

const juournalSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    title:{
        type:String,
        required:[true,'please add a title']
    },
    content:{
        type:String,
        required:[true,'please add a content']
    },
    mood:{
        type:String,
        default:"😀"
    },
    date:{
        type:String,
    },
},{
    timestamps:true
})
const Journal=mongoose.model("Journal",juournalSchema)

module.exports=Journal