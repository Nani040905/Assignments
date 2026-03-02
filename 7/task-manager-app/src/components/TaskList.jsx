import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks,completed, deleteTask}) {
  return (
    <div className='bg-blue-300 m-2.5 rounded-4xl shadow-2xl/60 shadow-blue-700 border-2' >
        <h3 className="text-4xl text-center text-blue-950 p-5" ><i><b><u>List of Tasks</u></b></i></h3>
        {
            (tasks.length===0)? 
            (<p className="text-3xl text-blue-100 p-2.5 mb-8 text-center"><i>Empty</i></p>)
            :
            (tasks.map((task,index)=><TaskItem key={index} index={index} taskObj={task} completed={completed} deleteTask={deleteTask} />))
        }
    </div>
  )
}

export default TaskList