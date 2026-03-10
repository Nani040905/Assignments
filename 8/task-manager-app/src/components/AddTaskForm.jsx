import React from 'react'
import { useForm } from 'react-hook-form'

function AddTaskForm({addTask}) {
    let {register, handleSubmit, formState:{errors},reset} = useForm()

    const submitForm=(data)=>{
        addTask({...data,isComplete:false})
        reset()
    }

  return (
    <div className='bg-blue-300 m-2.5 rounded-4xl shadow-2xl/60 shadow-blue-700 border-2'>
        <h1 className="text-4xl text-center text-blue-950 p-5"><i><b><u>Add Tasks</u></b></i></h1>
        <form onSubmit={handleSubmit(submitForm)} className='px-10 text-center pb-10'>
            <div className='mb-5'>
                <input className='bg-blue-50 rounded-4xl p-3 text-blue-900 text-xl text-center shadow-xl/10' type="text" {...register('task',{required:true,minLength:3})} placeholder='Enter Task Title'/>
                {
                    errors.task?.type=="required" && <p className='text-red-700 text-xl'>Title is required</p>
                }
                {
                    errors.task?.type=="minLength" && <p className='text-red-700 text-xl' >Title should contain 3 characters</p>
                }
            </div>
            <button className='bg-blue-100 text-blue-950 text-xl rounded-4xl px-10 py-2.5 text-center shadow-xl' type='submit'>Add Task</button>
        </form>
    </div>
  )
}

export default AddTaskForm