module.exports = (sequelize, Sequelize) => {
    // Define the STdata model
    const STdata = sequelize.define("stdata", {
        student_ID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        major: {
            type: Sequelize.STRING
        },
        faculty: {
            type: Sequelize.STRING
        },
        syllabus: {
            type: Sequelize.STRING
        },
        academic: {
            type: Sequelize.STRING
        },
        year: {
            type: Sequelize.STRING
        },
        grade: {
            type: Sequelize.STRING
        },
        current: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        internship: {
            type: Sequelize.STRING
        }
    });


    return STdata;

  
};
