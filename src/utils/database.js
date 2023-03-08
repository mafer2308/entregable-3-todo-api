const {Sequelize} = require("sequelize")

const db = new Sequelize({
  database:"entregable3",
  host:"localhost",
  port:5432,
  username:"postgres",
  password:"ritbiangulo123",
  dialect:"postgres"

})

module.exports =db