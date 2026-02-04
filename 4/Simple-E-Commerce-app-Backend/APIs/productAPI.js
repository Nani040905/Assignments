import express from "express"
import { ProductModel } from "../models/productModel.js"

export const productRoute = express.Router()

//Route to create new product
productRoute.post('/products',async (req,res)=>{
    //get body data
    let productObj = req.body
    //create document
    let productDocument = new ProductModel(productObj)
    //save
    await productDocument.save()
    //res
    res.status(201).json({message:"Product created successfully"})
})

productRoute.get('/products',async (req,res)=>{
    let productList = await ProductModel.find()
    res.status(200).json({message:"Product list",payload:productList})
})
