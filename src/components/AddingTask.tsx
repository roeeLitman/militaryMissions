import React from 'react'

interface Prop {
    setIsChanged: (isChanged:boolean) => void
}

export default function AddingTask({setIsChanged}:Prop) {
  return (
    <div className='addingTask'>
        <input type="text" placeholder='Edit' />
        <select name="" id="">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>
        <select name="" id="">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>
        <input type="text" placeholder='descripition' />
    </div>
  )
}
