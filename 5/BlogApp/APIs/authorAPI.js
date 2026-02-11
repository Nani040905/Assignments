import express from 'express'
import { register } from '../services/authService.js'
import { ArticleModel } from '../models/articleModel.js'
import { verifyAuthor } from '../middleware/verifyAuthor.js'
import { verifyToken } from '../middleware/verifyToken.js'



export const authorRoute = express.Router()

// Register author (public)
authorRoute.post('/users',async(req,res)=>{
    // get user obj form req
    const userObj = req.body
    const newUserObj = await register({...userObj,role:"AUTHOR"})
    res.status(201).json({message:"user created",payload:newUserObj})
})


// create article (protected)
authorRoute.post("/articles",verifyToken,verifyAuthor,async (req,res)=>{
    //get article form req
    const articleObj = req.body
    //create article document
    const articleDoc = new ArticleModel(articleObj)

    //save
    let savedArticle = await articleDoc.save()

    //send res
    res.status(201).json({message:"article created",payload:savedArticle.toObject()})
})

// Read articles of author which are active (protected)
authorRoute.get("/articles/:authorId",verifyToken,verifyAuthor,async (req,res)=>{
    //get author by id
    let authorId = req.params.authorId
    //read articles by this author
    let articles = await ArticleModel.find({author:authorId,isArticleActive:true}).populate("author","firstName email")
    //send res
    res.status(200).json({message:"articles",payload:articles})
})

// Edit article (protected)
authorRoute.put("/articles",verifyToken,verifyAuthor,async (req,res)=>{
    //get modified article from req
    let {articleId,title,content,category} = req.body
    //find article
    let articleOfDB = await ArticleModel.findOne({_id:articleId,author:req.body.author})
    if (!articleOfDB){
        res.status(404).json({message:"article not found"})
    }
    //update article
    let updatedArticle = await ArticleModel.findByIdAndUpdate(articleId,{
        $set:{
            title,
            content,
            category
        }
    },
    {new:true})
    //send res
    res.status(200).json({message:"article updated",payload:updatedArticle})

})

// Delete article (soft delete) (protected)
authorRoute.delete('/articles/authorId/:authorId/articleId/:articleId',verifyToken,verifyAuthor,async(req,res)=>{
    let articleId = req.params.articleId
    //find article
    let articleOfDB = await ArticleModel.findOne({_id:articleId,author:req.params.authorId})
    if (!articleOfDB){
        res.status(404).json({message:"article not found"})
    }
    //delete article
    let article= await ArticleModel.findByIdAndUpdate(articleId,{$set:{isArticleActive:false}},{new:true})
    //send res
    res.status(200).json({message:"article deleted",payload:article})

})