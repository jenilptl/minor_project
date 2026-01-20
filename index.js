const express = require('express');
const dotenv = require('dotenv');
const routeUser = require('./routes/user.route');
dotenv.config()
const app = express();

app.use(express.json());
app.use('/users',routeUser)

app.listen(process.env.PORT,()=>{
    console.log("server started at 3000");   
})