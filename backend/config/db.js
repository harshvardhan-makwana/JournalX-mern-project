const mongoose = require('mongoose');

const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected")
    }
    catch(e){
        console.log(e.message)
    }
}
module.exports=connectDb