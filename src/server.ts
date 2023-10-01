import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
require("../src/routes/index")(app);

app.listen(3333, ()=>{
  console.log('Running on port 3333')
})