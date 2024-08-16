import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import ContactUs from "./ContactUs";
import TextUtils from "./Components/TextUtils";
import { useState } from "react";
import Footer from "./Components/Footer";
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
      <div className="container my-5 ">
        <TextUtils heading="Enter the text to analyze" mode={mode} />
      </div>

      <ContactUs mode={mode} />
      <Footer mode={mode} toggleMode={toggleMode} />
    </>
  );
}

export default App;
