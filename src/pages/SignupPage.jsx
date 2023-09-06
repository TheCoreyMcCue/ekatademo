import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div>
      <h1>Signup Page</h1>
      <Button variant="outlined">
        <Link to="/login">Back</Link>
      </Button>
    </div>
  );
};

export default SignupPage;
