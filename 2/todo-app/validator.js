// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title){
    if (title.length<3){
        return false
    }
    return true
}
// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority){
    if (priority!="low" && priority!="medium" && priority!="high"){
        return false
    }
    return true
}

// 3. Validate due date (must be future date)
function validateDueDate(date){
    if (new Date(date)<new Date()){
        return false
    }
    return true
}

export {validateTitle,validatePriority,validateDueDate}