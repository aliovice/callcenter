const path = require("path")
const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
// const colors = require('colors')
const cors = require("cors")
const  connectDb  = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
process.binding('http_parser').HTTPParser = require('http-parser-js').HTTPParser;

var http = require('http');

connectDb()


const port = process.env.PORT || 5000
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.use('/api/v1/contracts',require('./routes/contractRoutes'))


// for front
  if(process.env.NODE_ENV === 'production'){
      app.use(express.static(path.join(__dirname,"../frontend/build")))
      app.get("*",(req,res)=> res.sendFile(
          path.resolve(__dirname, "../","frontend","build","index.html")
      ))
  } else{
      app.get("/",(req,res)=>{
          res.send("in production mode")
      })
  }

app.use(errorHandler)

app.listen(port , ()=> console.log(`Server runing in ${port}`))