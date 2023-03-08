const Categories = require("./categories.models")
const Status = require("./status.models")
const Todos = require("./todo.models")
const Users = require("./users.models")

const initiModels = () =>{
  Users.hasMany( Todos ,{foreignKey:"userId"} )
  Todos.belongsTo(Users,{foreignKey:"userId"})

  Status.hasMany( Todos,{foreignKey:"statusId"}  )
  Todos.belongsTo(Status, {foreignKey:"statusId"})

  Categories.hasMany(Todos,{foreignKey:"categoryId"})
  Todos.belongsTo(Categories,{foreignKey:"categoryId"})


}

module.exports = initiModels