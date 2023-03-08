const UserServices = require("../services/user.services")

const createUser = async (req, res) => {
  try {
    const newUser = req.body 
    const result = await UserServices.userCreate(newUser)
    res.json(result) 
  } catch (error) {
    res.status(400).json(error)
  }
}

const getAllUsers = async (req, res) =>{
  try {
    const data = await UserServices.getAll()
    res.json(data)
  } catch (error) {
    res.status(400).json(error)
  }
}

 const getUserWithTodos = async( req, res) =>{
  try {
    const { userId }  = req.params
    const userAndTodos = await UserServices.userWithTodo(userId)
    res.json(userAndTodos)
  } catch (error) { 
    res.status(400).json(error)
  }
 }

module.exports = {
  createUser,
  getAllUsers,
  getUserWithTodos
}