const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// app.use();

const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to STdata application." });
});

// set port, listen for requests
require("./app/routes/STdata.routes")(app);
require("./app/routes/Course.routes")(app);
require("./app/routes/CourseJoinData.routes")(app);
// E:\Intern_Project\StudentExpress\app\routes\STdata.routes.js

// set port, listen for requests
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
