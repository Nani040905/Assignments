import { Schema,model } from "mongoose";

//Create Schema
const productSchema = new Schema({
    productName:{
        type:String,
        required:[true,"Product name is required"]
    },
    price:{
        type:Number,
        required:[true,"Product price is required"]
    },
    brand:{
        type:String,
        required:[true,"Product brand is required"]
    }
},{
    strict:true,
    timestamps:true,
    versionKey:false
})

//Create model
export const ProductModel = model("product",productSchema)