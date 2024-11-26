import Mission from '../../models/Missen'
import DetelsMission from './DetelsMission'
import ButtonsMission from './ButtonsMission'

interface Prop {
    missen:Mission
    setIsChanged:(IsChanged:boolean) => void
}

export default function ItemMission({missen, setIsChanged}:Prop) {
  return (
    <div>
        <DetelsMission missen={missen} />
        <ButtonsMission _id={missen._id!} status={missen.status} setIsChanged={setIsChanged} />
    </div>
  )
}
