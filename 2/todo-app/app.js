import {addTask,getAllTasks,completeTask} from './task.js';

// 1. Add some tasks
addTask("Homework","low","2026-01-25");
addTask("Grocery Shopping","medium","2026-01-30");
addTask("Pay Bills","high","2026-01-31");
// 2. Display all tasks
console.log(getAllTasks())
// 3. Complete a task
completeTask(0)
// 4. Display all tasks again
console.log(getAllTasks())
