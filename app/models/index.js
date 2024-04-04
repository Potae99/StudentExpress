// models/index.js
const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.stdata = require("./STdata.model.js")(sequelize, Sequelize);
db.Coursedata = require("./Course.model.js")(sequelize, Sequelize);
////////////////////////////////////////// Join table ////////////////////////////////////
db.stdata.hasMany(db.Coursedata, {
  foreignKey: 'student_ID',
  as: 'course'
});
module.exports = db;
