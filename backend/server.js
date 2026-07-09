const express=require('express');
const dotenv=require("dotenv")
const connectDb=require("./config/db")
const authRoutes=require("./routes/authRoutes")
const journalRoutes=require('./routes/journalRoutes')
const cors=require("cors");
const app=express();

dotenv.config();
connectDb();

app.use(express.json());
app.use(cors())
app.use('/api/auth',authRoutes);
app.use('/api/journal',journalRoutes)

app.get('/',(req,res)=>{
    res.send('root is working');
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});