import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [enabled, setEnable] = useState(false);
  const [position, setPosition] = useState({x:0, y:0});
  useEffect(() => {
    console.log("efect", { enabled });
    const handleMove = (event) => {
      const { clientX, clientY } = event;

      setPosition({x: clientX +25, y: clientY+45})
    };
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    return () =>{
      window.removeEventListener("pointermove", handleMove)
    }
  }, [enabled]);
  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 20,
          height: 20,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <h3>Proyecto3</h3>
      <button onClick={() => setEnable(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} Seguir Puntero
      </button>
    </main>
  );
}

export default App;
