import {users} from  "./data.js"

// Get only active users
function getActiveUsers(){
    return users.filter(ele=>ele.active)
}

// Extract names of active users
function getActiveUsersName(){
    return users.filter(ele=>ele.active).map(ele=>ele.name)
}

// Check if any admin exists
function hasAdmin() {
    return users.some(u => u.role === "admin");
}

// Find user by id
function getUserById(id){
    return users.find(ele=>ele.id===id)
}

// Deactivate a user immutably
function deactivateUser(id){
    return users.map(ele=>{
        if (ele.id===id){
            ele.active=false
        }
        return ele
    })
}


export {getActiveUsers,getActiveUsersName,hasAdmin,getUserById,deactivateUser}