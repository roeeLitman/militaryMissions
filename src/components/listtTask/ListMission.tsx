import React, { useEffect, useState } from 'react'
import Mission from '../../models/Missen'
import ItemMission from './ItemMission'

interface Prop {
    isChanged: boolean
    setIsChanged: (isChanged:boolean) => void
}

export default function ListMission({isChanged, setIsChanged}:Prop) {

    const [listMissions, setListMissions] = useState<Mission[]>([])

    useEffect( ()=> {
        (async () => {
            const resolt:Response = await fetch("https://reactexambackend.onrender.com/missions/8623150")
            const data:Mission[] = (await resolt.json() as Mission[])
            setListMissions(data)
            setIsChanged(false)
        } )()
    },[isChanged])

  return (
    <div>
        {listMissions.map( missen => <ItemMission key={missen._id} missen={missen} setIsChanged={setIsChanged} />)}
    </div>
  )
}
