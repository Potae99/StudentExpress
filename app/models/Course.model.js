////////////////////////////////////////////////////////////////// course models  /////////////////////////////////////////////

module.exports = (sequelize, Sequelize) => {
    // Define the Coursedata model
    const Coursedata = sequelize.define("Coursedata", {
        student_ID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'stdata',
                key: 'student_ID'
            }
        },
        course: {
            type: Sequelize.JSONB, // Use JSONB for PostgreSQL or JSON for other databases
            defaultValue: '[]' // Default value is an empty array
        },
    });

    // Define the association with STdata
    Coursedata.belongsTo(sequelize.models.stdata, {
        foreignKey: 'student_ID',
        as: 'student'
    });

    return Coursedata;
};
