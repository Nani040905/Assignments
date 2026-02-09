import express from 'express'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import { userRoute } from './APIs/userAPI.js'
import { authorRoute } from './APIs/authorAPI.js'
import { adminRoute } from './APIs/adminAPI.js'

config()//process .env

const app = express()

//Add body parser middleware
app.use(express.json())

//connect APIs
app.use('/user-api',userRoute)
app.use('/author-api',authorRoute)
app.use('/admin-api',adminRoute)

// Connect to Database
const connectDB = async ()=>{
    try {
        await connect(process.env.DB_URL)
        console.log("DB connection success")
        app.listen(process.env.PORT,()=>console.log("server started in port 3000"))
    } catch (err) {
        console.log("Err in DB connection",err)
    }
}

connectDB()


//error handeling middleware
app.use((err,req,res,next)=>{
    console.log(err)
    res.json({message:"Error",payload:err.message})
})