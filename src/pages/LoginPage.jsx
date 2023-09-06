import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[38%] left-[5%] flex flex-col">
          <h1 className="text-4xl text-white font-bold my-4">
            Realize Tomorrow, Today
          </h1>
          <p className="text-base text-white font-normal">
            Become a member today for loads of community benefits
          </p>
          <Button variant="outlined">
            <Link to="/">Back</Link>
          </Button>
        </div>
        <img
          className="w-full h-full object-cover"
          alt="ATM with neon colors"
          src="https://images.unsplash.com/photo-1533421644343-45b606745fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80"
        />
      </div>
      <div className="w-1/2 h-full bg-[#F5F5F5] flex flex-col p-20 justify-between">
        <h1 className="text-xl font-semibold text-[#060606]">
          Interactive Brand
        </h1>

        <div className="w-full flex flex-col">
          <h3 className="text-2xl font-semibold mb-4">Login</h3>
          <p className="text-small mb-2">
            Welcome back! Please enter you details.
          </p>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-small font-normal text-[#060606]">
            Don't have an account?
            <Link className="underline" to="/signup">
              signup for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
