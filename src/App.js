import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import React, { useState } from "react";

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
      <Navbar
        pageName="TextUtils"
        homeName="Home"
        mode={mode}
        switchMode={enableMode}
      />
      <div className="container my-5">
        <TextForm textHeading="Enter the text to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
