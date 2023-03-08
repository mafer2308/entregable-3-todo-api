const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const db = require("./utils/database")
const userRoutes = require("./routes/user.routes")
const todoRoutes = require("./routes/todo.routes")
const initModels = require("./models/initModels")


initModels()

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

const PORT = 8000

db.authenticate()
 .then(() => {
  console.log("base de datos actualizada");
 })
 .catch((error) => console.log(error))
 db.sync({force:false})
 .then(() => console.log("base de datos sync"))
 .catch((error) =>console.log(error))

app.use(userRoutes)

app.use(todoRoutes)



app.listen(PORT, () =>{
  console.log(`welcome servidor corriendo en el puerto ${PORT}`)
})