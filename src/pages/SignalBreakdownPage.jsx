import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const SignalBreakdownPage = () => {
  return (
    <div>
      <Link to="/">
        <Button>⬅️ navigate to home page</Button>
      </Link>
    </div>
  );
};

export default SignalBreakdownPage;
