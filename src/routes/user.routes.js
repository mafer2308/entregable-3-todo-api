const { Router} = require("express")
const { createUser, getAllUsers, getUserWithTodos } = require("../controllers/user.controllers")


const router = Router()
router.post("/api/v1/users" ,  createUser)
router.get("/api/v1/users", getAllUsers)
router.get("/api/v1/users/:userId/todos" , getUserWithTodos)
module.exports= router