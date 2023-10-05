const Sequelize = require("sequelize");
const sequelize = require("../db_config");

const User = sequelize.define("user", {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   name: Sequelize.STRING,
   phone: {
      type: Sequelize.INTEGER,
      allowNull: false,
   },
   email: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   datetime: {
      type: Sequelize.DATETIME,
      allowNull: false,
   },
});

module.exports = User;
