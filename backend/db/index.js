const Sequelize = require("sequelize");

const sequelize = new Sequelize("reactjs", "root", "root", {
  dialect: "mysql",
  host: "db",
  port: 3306,
});

const Notes = require("./Notes")(sequelize);

module.exports = {
  sequelize: sequelize,
  notes: Notes,
};
