import React from 'react'
import Mission from '../../models/Missen'
import DetelsMission from './DetelsMission'
import ButtonsMission from './ButtonsMission'

interface Prop {
    missen:Mission
}

export default function ItemMission({missen}:Prop) {
  return (
    <div>
        <DetelsMission missen={missen} />
        <ButtonsMission status={missen.status}/>
    </div>
  )
}
