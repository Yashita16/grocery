// create basic express app

import cookieParser from 'cookie-parser';
import express from 'express'
import cors from 'cors'
import connectDb from './config/db.js';
import connectCloudinary from './config/cloudinary.js';
import 'dotenv/config';
import userRouter from './routes/UserRoute.js';
import sellerRouter from './routes/SellerRoute.js';
import ProductRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import addressRouter from './routes/addressRoute.js';

const app=express();
const port = process.env.PORT || 4000;

await connectDb()

await connectCloudinary()


//allow multiple origin

const allowedOrigins = ['http://localhost:5173']



//MiddleWare configuration 
app.use(express.json()); // all the request passed by json method

app.use(cookieParser());
app.use(cors({origin: allowedOrigins , credentials: true}));


app.get('/', (req , res)=>res.send("API is working"));
app.use('/api/user' , userRouter)
app.use('/api/seller' , sellerRouter)
app.use('/api/product' , ProductRouter)
app.use('/api/cart' , cartRouter)
app.use('/api/address' , addressRouter)

app.listen(port , ()=>{
  console.log(`server is sunning on http://localhost:${port}`)
})

