import React from 'react'
import { Status } from '../../models/Enums/Status'

interface Prop {
    status: string
    setIsChanged:(IsChanged:boolean) => void
}

export default function ButtonsMission({status, setIsChanged}:Prop) {
    const ProgressMissen = ():void => {
        
    }

  return (
    <div>
        <button>delete</button>
        {Status.Completed === status || <button>Progress</button>}
    </div>
  )
}
