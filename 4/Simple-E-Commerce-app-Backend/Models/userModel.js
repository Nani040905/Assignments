import { Schema,SchemaType,model } from "mongoose";

//Create cart Schema
const cartSchema = new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:"product"  //name of the product model
    },
    quantity:{
        type:Number
    }
},{
    strict:true,
    versionKey:false
});

//Create Schema
const userScheme = new Schema({
    name:{
        type: String,
        required: [true,"Name is required"]
    },
    email:{
        type: String,
        required: [true,"email is required"],
        unique: true //add t index
    },
    password:{
        type: String,
        required: [true,"password is required"]
    },
    cart:{
        type: [cartSchema]
        
    }
},{
    strict:true,
    timestamps:true,
    versionKey:false
})
//Create model
export const UserModel = model("user",userScheme)