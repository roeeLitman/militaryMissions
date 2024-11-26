import { Status } from "../../models/Enums/Status";

interface Prop {
  _id: string;
  status: string;
  setIsChanged: (IsChanged: boolean) => void;
}

export default function ButtonsMission({ status, _id, setIsChanged }: Prop) {
  const deleteMissen = async (): Promise<void> => {
    const resolt: Response = await fetch(
      `https://reactexambackend.onrender.com/missions/8623150/${_id}`,
      { method: "DELETE" }
    );
    await resolt.json();
    setIsChanged(true);
  };

  const progressMiseen = async (): Promise<void> => {
    const resolt: Response = await fetch(
      `https://reactexambackend.onrender.com/missions/8623150/progress/${_id}`,
      { method: "Post" }
    );
    await resolt.json();
    setIsChanged(true);
  };

  return (
    <div>
      <button onClick={deleteMissen}>delete</button>
      {Status.Completed === status || (
        <button onClick={progressMiseen}>Progress</button>
      )}
    </div>
  );
}
