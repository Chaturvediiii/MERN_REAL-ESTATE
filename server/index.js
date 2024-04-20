import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import postRouter from './routes/post.route.js'
import listingRouter from './routes/listing.route.js'
import cookieParser from 'cookie-parser';
import path from 'path'
dotenv.config()

mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log(err);
})


const app = express();
const __dirname = path.resolve();

app.use(express.json())
app.use(cookieParser())
const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}!!`);
})

app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.use('/api/listing',listingRouter)
app.use('/api/post',postRouter)

app.use(express.static(path.join(__dirname,'/client/dist')))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','dist','index.html'))
})

app.use((error,req,res,next)=>{
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal server error'
    return res.status(statusCode).json({
        success : false,
        message,
        statusCode
    })
})