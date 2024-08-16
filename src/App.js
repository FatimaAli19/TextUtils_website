import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import TextUtils from "./Components/TextUtils";
import About from "./Components/About";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
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
      <Router> 
        <NavBar mode={mode} toggleMode={toggleMode} />

         <Routes>
          <Route
            path="/"
            element={
              <div className="container my-5 ">
                <TextUtils heading="Enter the text to analyze" mode={mode} />
              </div>
            }
          />
          <Route
            path="/home"
            element={
              <div className="container my-5 ">
                <TextUtils heading="Enter the text to analyze" mode={mode} />
              </div>
            }
          />
          <Route
            path="/about"
            element={<About mode={mode} toggleMode={toggleMode} />}
          />
          <Route path="/Contact" element={<ContactUs mode={mode} />} />
        </Routes>
        <Footer mode={mode} toggleMode={toggleMode}/> 
        </Router>
      
    </>
  );
}

export default App;
