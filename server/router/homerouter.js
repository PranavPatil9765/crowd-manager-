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
    const {name,size,featured,price,location,brand} = req.body;
    if(name) dynamic_query.name = name;
    if(size) dynamic_query.size = size;
    if(featured) dynamic_query.featured = featured;
    if(price) dynamic_query.price = price;
    if(location) dynamic_query.location = location;
    if(brand) dynamic_query.brand = brand;

    const dynamic_data = db.find(dynamic_query);
    return res.status(200).json(dynamic_data);
})
module.exports = router;