const path = require("path")
const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const colors = require('colors')
const cors = require("cors")
const  connectDb  = require('./client/config/db')
const { errorHandler } = require('./client/middleware/errorMiddleware')

connectDb()


const port = process.env.PORT || 5000
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())




app.use('/api/v1/companys',require('./client/routes/companyRoutes'))
app.use('/api/v1/contract',require('./client/routes/contractRoutes'))
app.use('/api/v1/information',require('./client/routes/informationRoutes'))

// for front
 if(process.env.NODE_ENV === production){
     app.use(express.static(path.join(__dirname,"../front/build")))
     app.get("*",(req,res)=> res.sendFile(
         path.resolve(__dirname, "../","front","build","index.html")
     ))
 } else{
     app.get("/",(req,res)=>{
         res.send("in production mode")
     })
 }

app.use(errorHandler)

app.listen(port , ()=> console.log(`Server runing in ${port}`))