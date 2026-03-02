import React from 'react'

function TaskItem({taskObj,completed,index,deleteTask}) {
  return (
    <div className='bg-blue-400 rounded-4xl p-2.5 mx-5 mb-5 text-center shadow-xl/20'>
        {
            (taskObj.isComplete)? 
            (<p className='bg-blue-200 text-blue-950 text-xl rounded-4xl p-2.5 mx-2 text-center shadow-xl'><s>{taskObj.task}</s></p>) 
            :
            (<p className='bg-blue-50 text-blue-950 text-xl rounded-4xl p-2.5 mx-2 text-center shadow-xl'>{taskObj.task}</p>)
        }
        <div className="mt-2 flex">
            {
                (taskObj.isComplete)?
                <button className='bg-blue-200 text-blue-950 text-xl rounded-4xl px-10 py-1.5 text-center shadow-xl'disabled >Completed</button>
                :
                <button className='bg-blue-100 text-blue-950 text-xl rounded-4xl px-10 py-1.5 text-center shadow-xl' onClick={()=>completed(index)}>Completed</button>
            }
            <button className='bg-red-500 rounded-4xl px-10 py-1.5 mx-5 text-center shadow-xl' onClick={()=>deleteTask(index)}>Delete</button>
        </div>
    </div>
  )
}

export default TaskItem