const db = require("../models");
const CourseData = db.Coursedata;
const STdata = db.stdata; // Assuming this is your student table
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.student_ID || !req.body.course || typeof req.body.course !== 'object') {
        return res.status(400).send({ message: "Invalid request format" });
    }

    // Check if the student exists
    STdata.findByPk(req.body.student_ID)
        .then(student_ID => {
            if (!student_ID) {
                return res.status(404).send({ message: "Student not found" });
            }

            // Create a new course record
            const course = {
                student_ID: req.body.student_ID,
                course: req.body.course
            };

            // Save the new course record
            CourseData.create(course)
                .then(data => {
                    res.status(201).send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the course."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error retrieving student" });
        });
};

///////////////////////////////////////////////////////////////////////// delete student by student_ID /////////////////////////////////
exports.deleteCourseData = (req, res) => {
    const id = req.params.student_ID;

    CourseData.destroy({
        where: { id: id } // Change 'student_ID' to 'id' if 'id' is the correct field to use
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "CourseData was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete CourseData with ID=${id}. Maybe CourseData was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete CourseData with ID=" + id
        });
    });
};


