import express from 'express'
import { register ,authenticate } from '../services/authService.js'

export const userRoute = express.Router()


// Register user
userRoute.post('/users',async(req,res)=>{
    // get user obj form req
    const userObj = req.body
    const newUserObj = await register({...userObj,role:"USER"})
    res.status(201).json({message:"user created",payload:newUserObj})
})

// Authenticate user
userRoute.post('/authenticate',async(req,res)=>{
    //get user cred object
    let userCred=req.body
    //call authenticate service
    let {token,user} = await authenticate(userCred)
    //save httponlt cookie
    res.cookie("token",token,{
        httpOnly:true,
        sameSite:"lax",
        secure:false
    })
    //send res
    res.status(200).json({message:"login success",payload:user})
})

// Read all articles
userRoute.get("/articles",async (req,res)=>{
    //read articles
})
// Add comments to an article