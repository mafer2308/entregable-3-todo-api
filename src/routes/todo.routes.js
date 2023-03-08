const {Router} = require("express")
const { createTodo, getTodosWithCategories, deleteTodo, updateStatus } = require("../controllers/todo.controllers")


const router = Router()

router.get("/api/v1/todos/:todoId/categories", getTodosWithCategories)

router.post("/api/v1/todos" , createTodo)


router.delete("/api/v1/todos/:id", deleteTodo)

router.put("/api/v1/todos/:id", updateStatus)
module.exports = router