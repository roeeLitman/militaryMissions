import React from 'react'
import { Status } from '../models/Enums/Status'
import { Priority } from '../models/Enums/PriorityEnum'

interface Prop {
    setIsChanged: (isChanged:boolean) => void
}

export default function AddingTask({setIsChanged}:Prop) {
  return (
    <div className='addingTask'>
        <input type="text" placeholder='Edit' />
        <select name="" id="">
            <option value={Status.Pending}>{Status.Pending}</option>
            <option value={Status.Progress}>{Status.Progress}</option>
            <option value={Status.Completed}>{Status.Completed}</option>
        </select>
        <select name="" id="">
            <option value={Priority.Low}>{Priority.Low}</option>
            <option value={Priority.Medium}>{Priority.Medium}</option>
            <option value={Priority.High}>{Priority.High}</option>
        </select>
        <input type="text" placeholder='descripition' />
    </div>
  )
}
