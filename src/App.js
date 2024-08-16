import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import TextUtils from "./Components/TextUtils";
import { useState } from "react";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1e3021";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <NavBar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container my-5">
                <TextUtils heading="Enter the text to analyze" mode={mode} />
              </div>
            }
          />
          <Route
            path="/home"
            element={
              <div className="container my-5">
                <TextUtils heading="Enter the text to analyze" mode={mode} />
              </div>
            }
          />
          <Route
            path="/about"
            element={<About mode={mode} toggleMode={toggleMode} />}
          />
          <Route path="/contact" element={<ContactUs mode={mode} />} />
        </Routes>
        <Footer mode={mode} toggleMode={toggleMode} />
      </Router>
    </>
  );
}

export default App;
