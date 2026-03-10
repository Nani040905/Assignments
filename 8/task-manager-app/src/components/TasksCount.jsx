import React from 'react'

function TasksCount({tasks}) {
  return (
    <div>
      <div className='bg-blue-300 m-2.5 rounded-4xl shadow-2xl/60 shadow-blue-700 border-2' >
        <h3 className="text-4xl text-center text-blue-950 p-5" ><i><b><u>Task Count</u></b></i></h3>
        <p className='bg-blue-100 rounded-4xl p-2.5 mx-5 text-center text-blue-800 text-3xl shadow-xl mb-7'>{tasks.length}</p>
    </div>
    </div>
  )
}

export default TasksCount