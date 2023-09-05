import React from "react";
import RegForm from "./regForm";
// import mainLogo from "../assets/Mastercard_2019_logo.png";
import //   FormControl,
// InputLabel,
// Input,
//   TextField,
// FormHelperText,
"@mui/material";

const Landing = ({ Desktop, Ipad, Mobile }) => {
  return (
    <div>
      <h1
        style={{
          background: "#dcdfe3",
          textAlign: "center",
          marginBlockStart: 0,
          marginBlockEnd: 0,
          paddingTop: "1rem",
          position: "elative",
          color: "orange",
        }}
      >
        Ekata Product Demonstration
      </h1>
      <div
        style={{
          background: "#dcdfe3",
          height: "100vh",
          // width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="App"
      >
        <RegForm Desktop={Desktop} Ipad={Ipad} Mobile={Mobile} />
      </div>
    </div>
  );
};

export default Landing;
