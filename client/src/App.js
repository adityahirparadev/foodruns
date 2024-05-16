import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <h1>Hello</h1>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
