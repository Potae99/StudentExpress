module.exports = app => {
    const stdata = require("../controllers/STdata.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", stdata.create);
    app.use('/api/stdata', router);
    
};