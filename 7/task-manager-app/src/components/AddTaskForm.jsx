import React from 'react'
import { useForm } from 'react-hook-form'

function AddTaskForm({addTask}) {
    let {register, handleSubmit, formState:{errors},reset} = useForm()

    const submitForm=(data)=>{
        addTask({...data,isComplete:false})
        reset()
    }

  return (
    <div className='bg-amber-400 m-2.5 rounded-4xl shadow-xl'>
        <h1 className="text-4xl text-center text-amber-600 p-5"><i>Add Tasks</i></h1>
        <form onSubmit={handleSubmit(submitForm)} className='px-10 text-center pb-10'>
            <div className='mb-5'>
                <input className='bg-amber-100 rounded-4xl p-2.5 text-center shadow-xl' type="text" {...register('task',{required:true,minLength:3})} placeholder='Enter Task Title'/>
                {
                    errors.task?.type=="required" && <p className='text-red-500'>Title is required</p>
                }
                {
                    errors.task?.type=="minLength" && <p className='text-red-500' >Title should contain 3 characters</p>
                }
            </div>
            <button className='bg-amber-100 rounded-4xl px-10 py-2.5 text-center shadow-xl' type='submit'>Add Task</button>
        </form>
    </div>
  )
}

export default AddTaskForm