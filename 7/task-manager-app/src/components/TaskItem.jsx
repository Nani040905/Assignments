import React from 'react'

function TaskItem({taskObj,completed,index,deleteTask}) {
  return (
    <div className='bg-amber-300 rounded-4xl p-2.5 mx-2 mb-3 text-center shadow-xl'>
        {
            (taskObj.isComplete)? 
            (<p className='bg-amber-200 rounded-4xl p-2.5 mx-2 text-center'>{taskObj.task}</p>) 
            :
            (<p className='bg-amber-50 rounded-4xl p-2.5 mx-2 text-center'>{taskObj.task}</p>)
        }
        <div className="mt-2 flex">
            {
                (taskObj.isComplete)?
                <button className='bg-amber-300 rounded-4xl px-10 py-1.5 text-center shadow-xl'disabled >completed</button>
                :
                <button className='bg-amber-100 rounded-4xl px-10 py-1.5 text-center shadow-xl' onClick={()=>completed(index)}>completed</button>
            }
            <button className='bg-red-500 rounded-4xl px-10 py-1.5 mx-5 text-center shadow-xl' onClick={()=>deleteTask(index)}>Delete</button>
        </div>
    </div>
  )
}

export default TaskItem