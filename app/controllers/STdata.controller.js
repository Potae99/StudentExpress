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
/////////////////////////////////////////////////////////////// find all student ////////////////////////////////
exports.findAll = (req, res) => {
    const stdent_ID = req.query.stdent_ID;
    var condition = stdent_ID ? { stdent_ID: { [Op.iLike]: `%${stdent_ID}%` } } : null;

    STdata.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving students."
            });
        });
};

/////////////////////////////////////////////////////////////// update student ///////////////////////
exports.update = (req, res) => {
    const student_ID = req.params.student_ID;

    STdata.update(req.body, {
        where: { student_ID: student_ID }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "student was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update student with student_ID=${student_ID}. Maybe student was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating student with student_ID=" + student_ID
            });
        });
};

///////////////////////////////////////////////////////////////////////// delete student by student_ID /////////////////////////////////
exports.deleteSTData = (req, res) => {
    const student_ID = req.params.student_ID;

    STdata.destroy({
        where: { student_ID: student_ID }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "STdata was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete STdata with ID=${student_ID}. Maybe STdata was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete STdata with ID=" + student_ID
        });
    });
};



