import React, { useState } from "react";
import { Status } from "../models/Enums/Status";
import { Priority } from "../models/Enums/PriorityEnum";
import Mission from "../models/Missen";

interface Prop {
  setIsChanged: (isChanged: boolean) => void;
}

export default function AddingTask({ setIsChanged }: Prop) {
  const [Missen, setMissen] = useState<Mission>({
    name: "",
    description: "",
    priority: `${Priority.Low}`,
    status: `${Status.Pending}`,
  });

  const addMissen = async (): Promise<void> => {
    const res = await fetch(
      `https://reactexambackend.onrender.com/missions/8623150`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Missen),
      }
    );
    const data = await res.json();
    console.log(data);
    setIsChanged(true);
  };

  return (
    <div className="addingTask">
      <input
        onChange={(e) => {
          setMissen((missen) => {
            return { ...missen, name: e.target.value };
          });
        }}
        type="text"
        placeholder="Edit"
      />
      <select
        onChange={(e) => {
          setMissen((missen) => {
            return { ...missen, status: e.target.value };
          });
        }}
        name=""
        id=""
      >
        <option value={Status.Pending}>{Status.Pending}</option>
        <option value={Status.Progress}>{Status.Progress}</option>
        <option value={Status.Completed}>{Status.Completed}</option>
      </select>
      <select
        onChange={(e) => {
          setMissen((missen) => {
            return { ...missen, priority: e.target.value };
          });
        }}
        name=""
        id=""
      >
        <option value={Priority.Low}>{Priority.Low}</option>
        <option value={Priority.Medium}>{Priority.Medium}</option>
        <option value={Priority.High}>{Priority.High}</option>
      </select>
      <input
        onChange={(e) => {
          setMissen((missen) => {
            return { ...missen, description: e.target.value };
          });
        }}
        type="text"
        placeholder="descripition"
      />
      <button onClick={addMissen}>add missen</button>
    </div>
  );
}
