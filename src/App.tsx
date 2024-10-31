import { useState } from "react";
import "./App.css";
import AddingTask from "./components/AddingTask";
import ListMission from "./components/listtTask/ListMission";

function App() {
  const [isChanged, setIsChanged] = useState<boolean>(false)
  return (
    <>
      <AddingTask setIsChanged= {setIsChanged} />
      <ListMission isChanged={isChanged} setIsChanged={setIsChanged} />
    </>
  );
}

export default App;
