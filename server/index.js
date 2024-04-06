import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'
dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log(err);
})

const app = express();
const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}!!`);
})

app.use('/api/user',userRouter)