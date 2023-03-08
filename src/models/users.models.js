const {DataTypes} = require("sequelize")

const db = require("../utils/database")

const Users = db.define("users",{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    allowNull:false,
    autoIncrement:true
  },
  name:{
    type:DataTypes.STRING(35)
  },
  username:{
    type:DataTypes.STRING(35),
    allowNull:false,
    unique:true
  },
  email:{
    type:DataTypes.STRING(50),
    unique:true,
    allowNull:true,
    validate:{
      isEmail:true
    }
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false
  }

})
module.exports = Users