////////////////////////////////////////////////////////////////// course models  /////////////////////////////////////////////


    // Define the Coursedata model
    module.exports = (sequelize, Sequelize) => {
        const Coursedata = sequelize.define("Coursedata", {
            student_ID: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'stdata',
                    key: 'student_ID'
                }
            },
            course: {
                type: Sequelize.JSONB,
                defaultValue: {}
            },
        });
    
        // Define association with STdata (belongs to)
        Coursedata.belongsTo(sequelize.models.stdata, {
            foreignKey: 'student_ID',
            as: 'student'
        });
    
        return Coursedata;
    };
