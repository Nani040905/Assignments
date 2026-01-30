import exp from 'express'

export const userApp=exp.Router()

let users=[];

userApp.get('/users',(req,res)=>{
    res.status(200).json({message:"all users",payload:users})
})
userApp.post('/users',(req,res)=>{
    let newUser=req.body
    users.push(newUser)
    res.status(201).json({message:"User Created"})
})
userApp.put('/users',(req,res)=>{
    let modifiedUser=req.body
    let userIndex=users.findIndex((userObj)=>userObj.id===modifiedUser.id)
    if (userIndex === -1){
        return res.status(404).json({message:"User not found"})
    }
    let deletedUser= users.splice(userIndex,1,modifiedUser)
    res.status(200).json({message:"User modified"})
})
userApp.get('/users/:id',(req,res)=>{
    let id=Number(req.params.id)
    let user=users.find((userObj)=>userObj.id===id)
    if (!user){
        return res.status(404).json({message:"User not found"})
    }
    res.status(200).json({message:"user",payload:user})
})
userApp.delete('/users/:id',(req,res)=>{
    let id=Number(req.params.id)
    let userIndex=users.findIndex((userObj)=>userObj.id===id)

    if (userIndex===-1){
        return res.status(404).json({message:'User not found'})
    }
    let deletedUser=users.splice(userIndex,1)
    res.status(200).json({message:"User Deleted",payload:deletedUser})
})