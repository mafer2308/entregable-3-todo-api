const todosService = require("../services/todo.services")


const createTodo= async (req, res) => {
  try {
    const newTodo = req.body
    const todo= await todosService.todoCreate(newTodo)
    res.json(todo)
  } catch (error) {
    res.status(400).json(error)
  }
}

const getTodosWithCategories = async(req,res) => {
  try {
    const { todoId } = req.params
    const todoAndCategories = await todosService.getTodoAndCategory(todoId)
    res.json(todoAndCategories)
  } catch (error) {
    res.status(400).json(error)
  }
}


const deleteTodo = async (req, res) => {
  try {
    const {id} = req.params
    const result = await todosService.todoDelete(id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}

const updateStatus = async (req,res) =>{
  try {
    const {id} = req.params
    const data = req.body
    const todo = await todosService.statusUpdate(id,data)
    res.json(todo)
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports= {
  createTodo,
  getTodosWithCategories,
  deleteTodo,
  updateStatus
}