
const Sequelize = require("sequelize");
const sequelize = new Sequelize("node-complete", "root", "Vivek@123", {
   dialect: "mysql",
   host: "localhost",
});
module.exports = sequelize;