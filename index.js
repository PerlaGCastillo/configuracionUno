import 'dotenv/config'
import express from "express"
import todoRoute from "./routes/todo.routes.js"


const app = express()

app.use("/api/todos", todoRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log(`server listen on ${PORT}` )
})