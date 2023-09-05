import React from "react";
import { Link } from "react-router-dom";

const Signup = () => (
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
      Signup
    </h1>

    <Link
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
        position: "relative",
        zIndex: 100000,
      }}
      to="/"
    >
      Back
    </Link>
  </div>
);

export default Signup;
