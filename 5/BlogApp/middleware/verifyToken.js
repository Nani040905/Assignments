import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
config()



export const verifyToken=(req,res,next)=>{
    //read token from req
    let token = req.cookies.token
    if (!token) {
        return res.status(400).json({message:"Unauthorized request. Please Login"})
    }
    //verify the validity of the token(decoding the token)
    jwt.verify(token,process.env.JWT_SECRET)
    //farword to next middleware
    next()
}