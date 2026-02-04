import express from "express"
import { connect } from "mongoose"
import { userRoute } from "./APIs/userAPI.js"
import { productRoute } from "./APIs/productAPI.js"


const app = express()
const PORT=3000

async function connectDB(){
    try{
        console.log("Connecting to Database ...")
        await connect("mongodb://127.0.0.1:27017/simpleEcommerceDB")
        console.log("Connected to Database")
        app.listen(PORT,()=>console.log(`HTTP server is running on port ${ PORT } .....`))
    }catch(err){
        console.log("Database connection failed ....",err)
    }
}
connectDB()

app.use(express.json())



app.use('/user-api',userRoute)
app.use('/product-api',productRoute)

app.use((err, req, res, next)=>{
    res.status(500).json({message:"Error",reason:err.message})
})