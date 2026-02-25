import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks,completed, deleteTask}) {
  return (
    <div className='bg-amber-400 m-2.5 rounded-4xl shadow-xl p-3' >
        <h3 className="text-4xl text-center text-amber-600 p-5" ><i>List of Tasks</i></h3>
        {
            (tasks.length===0)? 
            (<p className="text-3xl text-amber-200 p-2.5 text-center"><i>Empty</i></p>)
            :
            (tasks.map((task,index)=><TaskItem key={index} index={index} taskObj={task} completed={completed} deleteTask={deleteTask} />))
        }
    </div>
  )
}

export default TaskList