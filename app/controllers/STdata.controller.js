const db = require("../models");
const STdata = db.stdata;
const Op = db.Sequelize.Op;

/////////////////////////////////////////// Create and Save a new Course ///////////////////////////////////////////////
exports.create = (req, res) => {
    // Validate request
    if (!req.body.student_ID) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a STdata
    const stdata = {
        student_ID: req.body.student_ID,
        major: req.body.major,
        facully: req.body.facully,
        syllabus: req.body.syllabus,
        academic: req.body.academic,
        year: req.body.year,
        grade: req.body.grade,
        current: req.body.current,
        address: req.body.address,
        internship: req.body.internship
    };
    // Save STdata in the database
    STdata.create(stdata)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the stdata."
            });
        });
};







