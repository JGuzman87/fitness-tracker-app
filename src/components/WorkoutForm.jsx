"use client"
import { useState } from 'react';

const WorkoutForm = ({stored}) => {
    const [formData, setFormData] = useState({name: '', pounds: ''});



    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        stored(formData);

        setFormData( prev => ({...prev, name: '', pounds: ''}))

    }


  return (
    <form className='flex flex-col justify-center items-center gap-2 p-2 shadow-xl h-1/2' onSubmit={handleSubmit}>
        <label htmlFor='name'>Workout Name: </label>
        <input className="bg-gray-100 w-1/2 p-1"type='text' name="name" value={formData.name} onChange={handleChange}  />
         <label htmlFor='punds'>Pounds </label>
        <input className="bg-gray-100 w-1/2 p-1"type='text' name="pounds" value={parseFloat(formData.pounds) || ""} onChange={handleChange} />
        <button className='btn btn-ghost' type='submit'>Submit</button>



    </form>
  )
}

export default WorkoutForm