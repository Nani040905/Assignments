import express from 'express'
import { UserModel } from '../models/usermodel.js'
export const userApp=express.Router()

//USER API ROUTS

//Create User
userApp.post('/users',async (req,res)=>{
    //get newUser from request
    let newUser=req.body
    //create new user document
    let newUserDoc=new UserModel(newUser)
    //save in db
    await newUserDoc.save()
    //
    res.status(201).json({message:"User Created",})
    
})

//Read User
userApp.get('/users',async(req,res)=>{
    //read users from DB
    let usersList = await UserModel.find()
    res.status(200).json({message:"Users",payload:usersList})
})

//Read user by ObjectID
userApp.get('/users/:id',async(req,res)=>{
    //get objectID from url
    let objID=req.params.id
    let userObj=await UserModel.findById(objID)
    res.status(200).json({message:"user",payload:userObj})
})

//Update User
userApp.put('/users/:id',async (req,res)=>{
    //get objId form url
    let objId=req.params.id
    //get modified user from body
    let modifiedUser=req.body
    //make update
    let latestUser = await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser}},{new:true,runValidators:true})
    //send res
    res.status(200).json({message:"user modified",payload:latestUser})
})

//Delete User
userApp.delete('/users/:id',async (req,res)=>{
    //get objId form url
    let objId=req.params.id
    //delete user by id
    let deletedUser = await UserModel.findByIdAndDelete(objId)
    res.status(200).json({message:"user deleted",payload:deletedUser})
})