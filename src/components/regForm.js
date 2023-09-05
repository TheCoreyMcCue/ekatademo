import React from "react";
import { Link } from "react-router-dom";
import {
  FormControl,
  // InputLabel,
  // Input,
  TextField,
  // FormHelperText,
} from "@mui/material";

const RegForm = ({ Desktop, Ipad, Mobile }) => {
  return (
    <div style={{ zIndex: 5 }}>
      <form
        style={{
          color: "black",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          width: Desktop ? "20vw" : Ipad ? "30vw" : "80vw",
        }}
      >
        <FormControl>
          <TextField
            required
            id="outlined-required"
            label="Username"
            // defaultValue="Hello World"
          />
        </FormControl>
        <FormControl>
          <TextField
            id="outlined-required-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            style={{ marginTop: "0.5rem" }}
          />
        </FormControl>
      </form>
      <Link
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          position: "relative",
          zIndex: 100000,
        }}
        to="/signup"
      >
        New customer? Signup here
      </Link>

      {/* <a
      //   target="_blank"
      //   rel="noreferrer"
      //   href="https://www.google.com"
      //   style={{
      //     display: "flex",
      //     justifyContent: "center",
      //     marginTop: "10px",
      //     position: "relative",
      //     zIndex: 100000,
      //   }}
      // >
      //   Create an account
      // </a> */}
    </div>
  );
};

export default RegForm;
