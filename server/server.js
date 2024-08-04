const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//dotenv configuration
const dotenv = require('dotenv');
dotenv.config();


//home routing
const router = require('./router/homerouter')
app.use("/home/v1/api",router);


//mongodb server
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL,{
    dbName: "Sparkathon",
})
.then(()=>{console.log('connected to mongodb');})
.catch(()=>{console.log('error connecting to mongodb')})

//operations on mongodb




//app listening
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});