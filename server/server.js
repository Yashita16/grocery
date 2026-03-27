// create basic express app

import cookieParser from 'cookie-parser';
import express from 'express'
import cors from 'cors'

const app=express();
const port = process.env.PORT || 4000;

//allow multiple origin

const allowedOrigins = ['http://localhost:5173']



//MiddleWare configuration 
app.use(express.json()); // all the request passed by json method

app.use(cookieParser());
app.use(cors({origin: allowedOrigins , Credential: true}));


app.get('/', (req , res)=>res.send("API is working"));

app.listen(port , ()=>{
  console.log(`server is sunning on http://localhost:${port}`)
})

