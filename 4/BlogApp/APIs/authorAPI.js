import express from 'express'
import { register ,authenticate } from '../services/authService.js'
import { ArticleModel } from '../models/articleModel.js'
import { verifyAuthor } from '../middleware/verifyAuthor.js'



export const authorRoute = express.Router()

// Register author
authorRoute.post('/users',async(req,res)=>{
    // get user obj form req
    const userObj = req.body
    const newUserObj = await register({...userObj,role:"AUTHOR"})
    res.status(201).json({message:"user created",payload:newUserObj})
})
// Authenticate auther
authorRoute.post('/authenticate',async(req,res)=>{
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
// create article
authorRoute.post("/articles",verifyAuthor,async (req,res)=>{
    //get article form req
    const articleObj = req.body
    //create article document
    const articleDoc = new ArticleModel(articleObj)

    //save
    let savedArticle = await articleDoc.save()

    //send res
    res.status(201).json({message:"article created",payload:savedArticle.toObject()})
})
// Read articles of author which are active
authorRoute.get("/articles/:authorId",verifyAuthor,async (req,res)=>{
    //get author by id
    let authorId = req.params.authorId
    //read articles by this author
    let articles = await ArticleModel.find({author:authorId,isArticleActive:true}).populate("author","firstName email")
    //send res
    res.status(200).json({message:"articles",payload:articles})
})
// Edit article
authorRoute.put("/articles",verifyAuthor,async (req,res)=>{
    //get modified article from req
    let modifiedArticleObj = req.body
    //update article
    let updatedArticle = await ArticleModel.findByIdAndUpdate(modifiedArticleObj.article,{
        $set:{
            title:modifiedArticleObj.title,
            content:modifiedArticleObj.content,
            category:modifiedArticleObj.category
        }
    },
    {new:true})
    //send res
    res.status(200).json({message:"article updated",payload:updatedArticle})

})
// Delete article (soft delete)
