import express from 'express'
import { register ,authenticate } from '../services/authService.js'
import { verifyToken } from '../middleware/verifyToken.js'
import { ArticleModel } from '../models/articleModel.js'

export const userRoute = express.Router()


// Register user
userRoute.post('/users',async(req,res)=>{
    // get user obj form req
    const userObj = req.body
    const newUserObj = await register({...userObj,role:"USER"})
    res.status(201).json({message:"user created",payload:newUserObj})
})


// Read all articles
userRoute.get("/articles",verifyToken,async (req,res)=>{
    //read articles
    let articles = await ArticleModel.find({isArticleActive:true}).populate("author","firstName email")
    //send res
    res.status(200).json({message:"articles",payload:articles})
})
// Add comments to an article
userRoute.put("/articles",verifyToken,async (req,res)=>{
    //get modified article from req
    let {articleId,user,comment} = req.body
    //find article
    let articleOfDB = await ArticleModel.findOne({_id:articleId,isArticleActive:true})
    if (!articleOfDB){
        return res.status(404).json({message:"article not found"})
    }
    //update article
    let updatedArticle = await ArticleModel.findByIdAndUpdate(articleId,{$push:{comments:{user,comment}}},{new:true})
    //send response
    res.status(200).json({message:"article updated",payload:updatedArticle})
})