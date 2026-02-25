import React, { useState } from 'react'
import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'
import TasksCount from './TasksCount'

function TaskManager() {
    let [tasks,setTasks] = useState([])
    function addTask(obj){
        setTasks([...tasks,obj])
    }
    function completed(index) {
        setTasks(prev =>
            prev.map((task, i) =>
                (i === index)
                ? { ...task, isComplete: true }
                : task
            )
        )
    }
    function deleteTask(index){
        let temp=tasks.filter((_,i)=>i!==index)
        setTasks(temp)
    }
  return (
    <div className='flex bg-amber-500 m-10 rounded-4xl p-10 shadow-2xl border-8 border-amber-600 shadow-amber-600 gap-1'>
        <div className='w-2/6 h-61' ><AddTaskForm addTask={addTask} /></div>
        <div className='w-1/3'><TaskList tasks={tasks} completed={completed} deleteTask={deleteTask} /></div>
        <div className='w-1/3'><TasksCount tasks={tasks} /></div>
        
    </div>
  )
}

export default TaskManager