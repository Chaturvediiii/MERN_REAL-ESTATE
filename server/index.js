import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log(err);
})

const app = express();
const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}!!`);
})