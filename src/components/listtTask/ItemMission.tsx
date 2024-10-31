import React from 'react'
import Mission from '../../models/Missen'

interface Prop {
    missen:Mission
}

export default function ItemMission({missen}:Prop) {
  return (
    <div>{missen}</div>
  )
}
