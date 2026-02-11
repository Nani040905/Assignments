import express from 'express'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import { userRoute } from './APIs/userAPI.js'
import { authorRoute } from './APIs/authorAPI.js'
import { adminRoute } from './APIs/adminAPI.js'
import cookieParser from 'cookie-parser'
import { commonRouter } from './APIs/commonAPI.js'


config()//process .env

const app = express()

//Add body parser middleware
app.use(express.json())
app.use(cookieParser())

//connect APIs
app.use('/user-api',userRoute)
app.use('/author-api',authorRoute)
app.use('/admin-api',adminRoute)
app.use('/common-api',commonRouter)

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

//dealing with invalid paths
app.use((req, res, next)=>{
    res.json({ message: "Invalid path" });
})

//error handeling middleware
app.use((err,req,res,next)=>{
    console.log(err)
    res.json({message:"Error",payload:err.message})
})
