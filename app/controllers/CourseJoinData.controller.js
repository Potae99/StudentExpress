const db = require("../models");
const STdata = db.stdata;
const Coursedata = db.Coursedata; // Import CourseData model
const Op = db.Sequelize.Op;
/////////////////////////////////////////////////////////////////find one and course
exports.findOne = (req, res) => {
    const id = req.params.student_ID;
    STdata.findOne({
        include: [{
            model: Coursedata,
            as: 'course' // Use the correct alias 'course'
        }],
        where: {
            student_ID: id
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving student data."
        });
    });
};



