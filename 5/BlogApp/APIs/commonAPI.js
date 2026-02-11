import express from 'express'
import { authenticate } from '../services/authService.js'

export const commonRouter = express.Router()

//login
commonRouter.post('/login',async(req,res)=>{
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



//logout
commonRouter.use('/logout',(req,res)=>{
    res.clearCookie('token',{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })
    res.status(200).json({message:"logout success"})
})