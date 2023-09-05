import React from "react";
import {
  FormControl,
  // InputLabel,
  // Input,
  TextField,
  // FormHelperText,
} from "@mui/material";

const RegForm = () => {
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        width: "20vw",
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
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          style={{ marginTop: "0.5rem" }}
        />
      </FormControl>
    </div>
  );
};

export default RegForm;
