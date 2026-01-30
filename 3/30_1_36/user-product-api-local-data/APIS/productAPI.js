import exp from 'express'

//create a mini express application
export const productApp=exp.Router()

let products=[]

productApp.get('/products',(req,res)=>{
    res.status(200).json({message:"all products",payload:products})
})

productApp.get('/products-id/:id',(req,res)=>{
    let id=Number(req.params.id)
    let product=products.find((productObj)=>productObj.productId===id)
    if (!product){
        return res.status(404).json({message:"Product not found"})
    }
    res.status(200).json({message:"Product",payload:product})
})

productApp.get('/products-brand/:brand',(req,res)=>{
    let brand=req.params.brand
    let product=products.filter((productObj)=>{
        return productObj.brand===brand
    })
    if (product.length===0){
        return res.status(404).json({message:"Product not found"})
    }
    res.status(200).json({message:"Product",payload:product})
})

productApp.post('/products',(req,res)=>{
    let newProduct=req.body
    products.push(newProduct)
    res.status(201).json({message:"Product added"})
})

productApp.put('/products',(req,res)=>{
    let modifiedProduct=req.body
    let productIndex=products.findIndex((productObj)=>{
        return productObj.productId===modifiedProduct.productId
    })
    if (productIndex===-1){
        return res.status(404).json({message:"Product not found"})
    }
    products.splice(productIndex,1,modifiedProduct)
    res.status(200).json({message:"Product updated"})
})

productApp.delete('/products/:id',(req,res)=>{
    let id=Number(req.params.id)
    let productIndex=products.findIndex((productObj)=>{
        return productObj.productId===id
    })
    if (productIndex===-1){
        return res.status(404).json({message:"Product not found"})
    }
    let deletedProduct=products.splice(productIndex,1)
    res.status(200).json({message:"Product deleted",payload:deletedProduct})
})
