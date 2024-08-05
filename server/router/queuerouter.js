const express = require('express');
const users = require('../utils/userSchema');
const queueRouter = express.Router();

queueRouter.route("/").get(async (req, res) =>{
    // return the status of particular user
    const user = req.body;
    const userInfo = await users.findOne({phone : user.phone})
    if(userInfo){
        return res.status(200).json(userInfo);
    }else{
        return res.status(200).json({
            msg : "Phone number does not exists"
        })
    }
})
queueRouter.route("/book").put(async (req, res) => {
    // books a position in the queue for a user
    const user = req.body;
    const userInfo = await users.findOne({phone : user.phone});
    if(userInfo.position != -1){
        return res.status(200).json({
            msg : "Room is already booked"
        })
    }
    const lastUser = await users.findOne({}).sort({ position : -1});

    const response = await users.updateOne({phone : user.phone},{ $set : {position : lastUser.position+1}});
    return res.status(200).json({
        msg : "Room successfully booked"
    })
})

queueRouter.route("/remove").put( async (req, res) =>{
    // cancels booking for a user
    // or removes user from the queue as he enters the changing room
    try {
        const user = req.body;
        const userInfo = await users.findOne({phone : user.phone});
        await users.updateMany({position : { $gt : userInfo.position}}, {$inc : {position : -1}});
        await users.updateOne({ phone : userInfo.phone}, {position : -1});
        res.status(200).json({
            msg : "User removed successfully"
        });
    } catch (error){
        res.status(500).json({
            msg : "Error removing user"
        });
    }
})

module.exports = queueRouter;
