module.exports = app => {
    const CourseJoinData = require("../controllers/CourseJoinData.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
   
    router.get("/:student_ID", CourseJoinData.findOne);
    app.use('/api/CourseJoinData', router);
    
};