const Sequelize = require("sequelize"); 
 
const sequelize =  new Sequelize("reactjs", "root", "root", { 
    dialect: "mysql", 
    host: "127.0.0.1",
    port: 8889,
}); 
 
const Notes = require('./notes')(sequelize); 
 
module.exports = { 
    sequelize : sequelize, 
    notes : Notes 
}