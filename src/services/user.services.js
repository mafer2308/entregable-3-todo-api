const Users = require("../models/users.models")
const Todos = require("../models/todo.models")

class UserServices{

  static async userCreate(newUser){
    try {
      const createUs = await Users.create(newUser)
      return createUs
    } catch (error) {
      throw error
    }
  }
  static async getAll(){
    try {
      const usersAll = await Users.findAll()
      return usersAll
    } catch (error) {
      throw error
    }
  }

  static async userWithTodo(userId){
    try {
      const result = await Users.findByPk(userId, {
        include:[
          {
            model:Todos
          }
        ]
      })
      return result
    } catch (error) {
      throw error
    }
  }

}

module.exports = UserServices