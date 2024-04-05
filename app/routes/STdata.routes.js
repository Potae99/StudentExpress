module.exports = app => {
    const stdata = require("../controllers/STdata.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.get("/",stdata.findAll)
    router.post("/", stdata.create);
    router.put("/:student_ID", stdata.update);
    router.delete("/:student_ID", stdata.deleteSTData);
    app.use('/api/stdata', router);
    
};