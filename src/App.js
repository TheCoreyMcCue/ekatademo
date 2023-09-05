import "./App.css";
// import RegForm from "./components/regForm";
import Signup from "./components/Signup";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import mainLogo from "./assets/Mastercard_2019_logo.png";
import Landing from "./components/Landing";

function App() {
  const Desktop = useMediaQuery("(min-width:1100px)");
  const Ipad = useMediaQuery("(min-width:760px)");
  const Mobile = useMediaQuery("(min-width:500px)");
  return (
    <div style={{ height: "100vh", background: "#dcdfe3" }}>
      <Routes>
        <Route
          path="/"
          element={<Landing Desktop={Desktop} Ipad={Ipad} Mobile={Mobile} />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={mainLogo}
          alt="Mastercard Logo"
          style={{
            position: "absolute",
            left: Desktop ? "20rem" : Ipad ? "0%" : "-13rem",
            top: "12rem",
            opacity: "25%",
          }}
        />
      </div>
    </div>
  );
}

export default App;
