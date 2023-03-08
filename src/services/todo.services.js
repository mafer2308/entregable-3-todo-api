const Categories = require("../models/categories.models")
const Status = require("../models/status.models")
const Todos = require("../models/todo.models")
const Users = require("../models/users.models")

class todoServices{
  static async todoCreate(newTodo){
    try {
      const todo = await Todos.create(newTodo)
      return todo
    } catch (error) {
      throw error
    }
  } 

  static async getTodoAndCategory(todoId){
    try {
      const result = await Todos.findByPk(
    todoId,{
      attributes:{exclude:["categoryId"]},
    include:[
      
      {
        model: Users,
        attributes: ["username"],
      },
      {
        model:Categories,
        attributes:["name"]
      },
      {
        model:Status,
        attributes:["name"]
      }
    ]
  }
  
      )
      return result
    } catch (error) {
    throw error
    }
  }

  static async todoDelete(id) {
    try {
      const todo = await Todos.destroy({
        where:{id}
      })
      return todo
    } catch (error) {
      throw error
    }
  }

  static async statusUpdate(id,data){
    try {
        const status = await Todos.update(data,{
          where:{id}
        })
        return status
    } catch (error) {
      throw error
    }
  } 

}

module.exports= todoServices