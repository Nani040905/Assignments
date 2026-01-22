import { roles } from "./data.js";

//Get all role names
function getRoleNames(){
    return Object.keys(roles)
}

//Check if student can delete
function canStudentDelete (){
    return roles.student.includes("delete")
}

//Create a flat list of all unique permissions
function getAllPermissions(){
    return [...new Set(Object.values(roles).flat())]
}

console.log(getAllPermissions())

//Add new role moderator immutably
function addRole(role){
    return {...roles,role}
}

export {getRoleNames,canStudentDelete,getAllPermissions,addRole}