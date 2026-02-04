import { Schema, model } from 'mongoose'

//create user schema
const userSchema = new Schema({
    firstname:{
        type:String,
        required:[true,"First name is required"]
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true , "Password is required"]
    },
    profileImageUrl:{
        type:String
    },
    role:{
        type:String,
        enum:["AUTHOR","USER","ADMIN"],
        required:[true,'{Value} is an invalid role']
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true,
    strict:'throw',
    versionKey:false
})

//create user type model
export const UserTypeModel = model('user',userSchema)