import React from 'react'

function TasksCount({tasks}) {
  return (
    <div>
      <div className='bg-amber-400 m-2.5 rounded-4xl shadow-xl p-3' >
        <h3 className="text-4xl text-center text-amber-600 p-5" ><i>Task Count</i></h3>
        <p className='bg-amber-200 rounded-4xl p-2.5 m-5 text-center text-amber-500 text-3xl'>{tasks.length}</p>
    </div>
    </div>
  )
}

export default TasksCount