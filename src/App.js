import { useState } from "react";
import "./App.css";
import { Accordian } from "./components/accordian";

function App() {
  const [selectedId, setSelectedId] = useState(new Set([]));
  return (
    <div className="App">
      {[1, 2, 3, 4].map((item) => (
        <Accordian
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          index={item}
        />
      ))}
    </div>
  );
}

export default App;
