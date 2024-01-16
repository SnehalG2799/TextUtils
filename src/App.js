import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {

  return (
    <>
      <Navbar pageName="TextUtils" homeName="Home" />

       <div className="container my-5">
        <TextForm textHeading="Enter the text to analyze"  />
      </div>
    </>
  );
}

export default App;
