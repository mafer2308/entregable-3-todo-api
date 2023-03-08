const {DataTypes} = require("sequelize")

const db = require("../utils/database")

const Status = db.define("status",{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  name:{
    type:DataTypes.STRING(30),
    allowNull:false
  }
},{
  timestamps:false
})
module.exports = Status