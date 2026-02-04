import express from "express"
import { UserModel } from "../models/userModel.js"
import  { ProductModel } from "../models/productModel.js"
import { hash } from "bcryptjs"

export const userRoute = express.Router()

//Route to create new user
userRoute.post('/users',async (req,res)=>{
    //get body data
    let userObj = req.body
    //validate newUser
    await new UserModel(userObj).validate()
    //hash the password
    let hashedPassword = await hash(userObj.password,12)
    //replace the old plain password with hashed password
    userObj.password = hashedPassword
    //create document
    let userDocument = new UserModel(userObj)
    //save
    await userDocument.save({validateBeforeSave:false})
    //res
    res.status(201).json({message:"User created successfully"})
})
/*
//Add product to users cart
userRoute.put('/user-cart/userid/:userId/productid/:productId',async (req,res)=>{
    let userId = req.params.userId
    let productId = req.params.productId
    let user = await UserModel.findById(userId)
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    let product = await ProductModel.findById(productId)
    if (!product){
        return res.status(404).json({message:"Product not found"})
    }
    let modifiedUser = await UserModel.findByIdAndUpdate(userId,{$push:{cart:{product:productId}}},{new:true, runValidators:true}).populate("cart.product")
    res.status(200).json({message:"Product added to cart",payload:modifiedUser})

})
*/

//Add product to user cart with quantity
userRoute.put('/user-cart/userid/:userId/productid/:productId',async (req,res)=>{
    let  { userId , productId } = req.params
    let user = await UserModel.findById(userId)
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    let product = await ProductModel.findById(productId)
    if (!product){
        return res.status(404).json({message:"Product not found"})
    }
    let productExist = await UserModel.findOne({_id:userId,"cart.product":productId})
    if (!productExist){
        let modifiedUser = await UserModel.findByIdAndUpdate(userId,{$push:{cart:{product:productId,quantity:1}}},{new:true,runValidators:true})
        res.status(200).json({message:"product add into cart",payload:modifiedUser})
    }
    else{
        let modifiedUser = await UserModel.findOneAndUpdate({_id:userId,"cart.product":productId},{$inc:{"cart.$.quantity":1}},{new:true,runValidators:true})
        res.status(200).json({message:"product quantity updated",payload:modifiedUser})
    }
})
    


// Read User by id
userRoute.get('/users/:id',async (req,res)=>{
    let userId = req.params.id
    let user = await UserModel.findById(userId).populate("cart.product","productName price")
    res.status(200).json({message:"User found",payload:user})
})