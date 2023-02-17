import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./components/Navbarr";
import UserList from "./components/UserList";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getuser } from "./Redux/userSlice";

function App() {
  const dispatch = useDispatch();
  const [ping, setping] = useState("");
  useEffect(() => {
    dispatch(getuser());
  }, [ping]);

  return (
    <div className="App">
      <Navbarr />

      <Routes>
        <Route path="/" element={<UserList ping={ping} setping={setping} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
