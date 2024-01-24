import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  
  let enableMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.background = "white";
    } else {
      setMode("dark");
      document.body.style.background = "#212529";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          pageName="TextUtils"
          homeName="Home"
          mode={mode}
          switchMode={enableMode}
        />
        <div className="container my-5">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm textHeading="Enter the text to analyze" mode={mode} />
              }
            />
            <Route path="about" element={<About  mode={mode}/>} />
            </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
