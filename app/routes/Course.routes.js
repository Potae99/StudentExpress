module.exports = app => {
    const Course = require("../controllers/Coursedata.controller");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", Course.create);
    app.use('/api/course', router);
    
};