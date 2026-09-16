import { useState } from "react";

function App() {
  const [color, setColor] = useState("#ffffff");

  function generateColor() {
    const randomColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);

    setColor(randomColor);
  }

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1>Random Color Generator</h1>

      <h2>{color}</h2>

      <button onClick={generateColor}>Generate Color</button>
    </div>
  );
}

export default App;