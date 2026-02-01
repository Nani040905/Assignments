import express from 'express'
import { userApp } from './APIS/userAPI.js'
import { connect } from 'mongoose'
import { productApp } from './APIS/productAPI.js'

const app = express()
const PORT = 4000

//body parser middleware
app.use(express.json())

// connect to db server
async function connectDB(){
    try{
        await connect('mongodb://localhost:27017/demoATP2')
        console.log("DB Connection success")
        //Assign path
        app.listen(PORT,()=>console.log(`HTTP server is running on port : ${PORT} .....`))
    }catch(err){
        console.log("Error in DB conncetion :",err)
    }
}
connectDB()

// if path starts from '/user-api'
app.use('/user-api',userApp)
app.use('/product-api',productApp)



// Custumaization of error format from HTML to JSON
// Should be at the end of the server.js
//error handeling middleware
app.use((err,req,res,next)=>{
    res.status(500).json({messahe:"error",reason:err.message})
})