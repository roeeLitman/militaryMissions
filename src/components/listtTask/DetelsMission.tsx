import React from 'react'
import Missen from '../../models/Missen'

interface Prop {
    missen:Missen
}

export default function DetelsMission({missen:{name, priority, status, description}}:Prop) {
  return (
    <div>
        <p>Name:{name}</p>
        <p>Priority:{priority}</p>
        <p>Status{status}</p>
        <p>Description:{description}</p>
    </div>
  )
}
