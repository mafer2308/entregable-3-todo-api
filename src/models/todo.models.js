const {DataTypes} = require("sequelize")

const db = require("../utils/database")

const Todos = db.define("todos",{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  userId:{
    type:DataTypes.INTEGER,
    allowNull:false,
    field:"user_id"
  },
  title:{
    type:DataTypes.STRING(70),
    allowNull:false,
  },
  description:{
    type:DataTypes.TEXT,
    allowNull:false
  },
  statusId:{
    type:DataTypes.INTEGER,
    allowNull:false,
    field:"status_id"
  },
  categoryId:{
    type:DataTypes.INTEGER,
    allowNull:false,
    field:"category_id"
  }

},{
  timestamps:true,
  updatedAt:false,
  field:"post_at"
})

module.exports= Todos