// TODO: Import validator functions
import { validateTitle,validatePriority, validateDueDate } from "./validator.js";

const tasks = [];
let id=0;

// 1. Add new task
function addTask(title, priority, dueDate) {
  // Validate using imported functions
  // If valid, add to tasks array
  // Return success/error message
  if (validateTitle(title) && validatePriority(priority) && validateDueDate(dueDate)){
    tasks.push({id,title,priority,dueDate,completed:false})
    id++
    console.log("Task added")
  }
  else{
    console.log("Task not added")
  }
}

// 2. Get all tasks
function getAllTasks() {
  // Return all tasks
  return tasks.filter(task=>!task.completed)
}

// 3. Mark task as complete
function completeTask(taskId) {
  // Find task and mark as complete
  for (let i=0;i<tasks.length;i++){
    if (tasks[i].id==taskId){
      tasks[i].completed=true
      console.log("Task completed")
      return
    }
    console.log("Task not found")
  }
}

// // Export functions
export { addTask, getAllTasks, completeTask };