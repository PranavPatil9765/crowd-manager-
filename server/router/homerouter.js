const express = require('express')
const router = express.Router();
const db = require('../utils/schema') 

router.route("/").get(async(req, res) => {

    //upon loading site
    
    const data = await db.find({});
    return res.status(200).json(data);


})

router.route("/").post(async(req, res) => {
    
    //making a dynamic search query
    const dynamic_query = {};
    const{size,minprice,maxprice} = req.body;
    
    
    if(size) dynamic_query.size = size;
    if(minprice && maxprice){
        dynamic_query.price = {$gte:minprice, $lte:maxprice};
    }

    const dynamic_data = await db.find(dynamic_query);
    if(!dynamic_data){
        return res.status(200);
    }else{

        return res.status(200).json(dynamic_data);
    }
})
module.exports = router;