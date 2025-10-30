import { useState } from "react";
import "./App.css";

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "brown",
  "gray",
  "black",
];

const diameter = 50;

function Circle({ x, y, color = "red" }) {
  return (
    <span
      style={{
        background: color,
        position: "absolute",
        height: `${diameter}px`,
        width: `${diameter}px`,
        borderRadius: "50%",
        top: y - diameter / 2,
        left: x - diameter / 2,
      }}
    />
  );
}
function App() {
  const [circles, setCircles] = useState([]);
  const [stack, setStack] = useState([]);

  const getCircle = (event) => {
    const containerRect = event.currentTarget.getBoundingClientRect();
    const clientX = event.clientX - containerRect.left;
    const clientY = event.clientY - containerRect.top;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const newCircle = { id: Date.now(), color: randomColor, clientX, clientY };
    setCircles((prev) => [...prev, newCircle]);
  };

  const onUndo = () => {
    const lastCircle = circles.pop();
    setStack((prev) => [...prev, lastCircle]);
    setCircles([...circles]);
  };
  const onRedo = () => {
    const lastCircle = stack.pop();
    setCircles((prev) => [...prev, lastCircle]);
    setStack([...stack]);
  };
  const onClear = () => {
    setCircles([]);
    setStack([]);
  };

  const isUndoDisabled = circles.length === 0;
  const isRedoDisabled = stack.length === 0;
  const isClearDisabled = circles.length == 0 && stack.length == 0;

  return (
    <div className="container">
      <div className="button-container">
        <button className="btn" onClick={onUndo} disabled={isUndoDisabled}>
          Undo
        </button>
        <button className="btn" onClick={onRedo} disabled={isRedoDisabled}>
          Redo
        </button>
        <button className="btn" onClick={onClear} disabled={isClearDisabled}>
          Clear Circles
        </button>
      </div>
      <div
        style={{
          position: "relative",
          background: "#f0f0f0",
          overflow: "hidden",
          borderRadius: "10px",
        }}
        className="circle-container"
        onClick={(event) => getCircle(event)}
      >
        {circles.map((circle) => (
          <Circle
            key={circle.id}
            x={circle.clientX}
            y={circle.clientY}
            color={circle.color}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
