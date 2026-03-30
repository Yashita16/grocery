// create basic express app

import cookieParser from 'cookie-parser';
import express from 'express'
import cors from 'cors'
import connectDb from './config/db.js';
import 'dotenv/config';
import userRouter from './routes/UserRoute.js';

const app=express();
const port = process.env.PORT || 4000;

await connectDb()


//allow multiple origin

const allowedOrigins = ['http://localhost:5173']



//MiddleWare configuration 
app.use(express.json()); // all the request passed by json method

app.use(cookieParser());
app.use(cors({origin: allowedOrigins , Credential: true}));


app.get('/', (req , res)=>res.send("API is working"));
app.use('/api/user' , userRouter)

app.listen(port , ()=>{
  console.log(`server is sunning on http://localhost:${port}`)
})

