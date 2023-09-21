const express = require('express');
const routes = require('./routes/api')

require('dotenv').config();

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!')
})

routes(app);
// connectDB();

app.listen(port, () => {
    console.log("Backend Nodejs is runing on the port : " + port)
})