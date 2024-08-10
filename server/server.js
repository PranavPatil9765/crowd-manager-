const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const socketIO = require('./utils/socketio');

const http = require("http");
const server = http.createServer(app);

const io = socketIO.init(server);



//dotenv configuration
const dotenv = require('dotenv');
dotenv.config();

//cors configuration

const cors = require('cors');
app.use(cors());

//home routing
const router = require('./router/homerouter')
//routing for the changing room part
const queueRouter = require('./router/queuerouter')

app.use("/home/v1/api",router);
app.use("/rooms/api",queueRouter)

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
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
