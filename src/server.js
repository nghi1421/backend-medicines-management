import express from 'express';
import connectDB from './config/connectDB.js';
import dotenv from 'dotenv'

dotenv.config()

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!')
})
 
connectDB();

app.listen(port, () => {
    console.log("Backend Nodejs is runing on the port : " + port)
})