const {Sequelize} = require("sequelize")

const db = new Sequelize({
  database:"apitodos",
  host:"localhost",
  port:5432,
  username:"postgres",
  password:"rut",
  dialect:"postgres"

})

module.exports =db