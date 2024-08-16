import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("black");
      document.body.style.backgroundColor = "#1e3021";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <NavBar mode={mode} toggleMode={toggleMode} />
      <About mode={mode} toggleMode={toggleMode} />
    </>
  );
}

export default App;
