import React from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import CountrySelect from "../components/CountryList";

const SignupPage = () => {
  return (
    <section>
      <div className="w-screen h-screen bg-[#F5F5F5] flex flex-col p-20 justify-between items-center">
        <h1 className="text-xl font-semibold text-[#060606]">
          Challenger Bank
        </h1>

        <div className="w-full flex flex-col max-w-[600px]">
          <div className="w-full flex flex-col mb-4">
            <h3 className="text-2xl font-semibold mb-2">Register</h3>
            <p className="text-base mb-2">Welcome! Please enter you details.</p>
          </div>

          <div className="w-full flex flex-col">
            <div style={{ marginBottom: "3px" }}>
              <TextField
                required
                className="w-full text-black py-2 border-b border-black outline-none bg-transparent"
                id="filled-required"
                label="First Name"
                type="text"
                placeholder="First Name"
                defaultValue=""
                color="warning"
                variant="standard"
              />
            </div>
            <div style={{ marginBottom: "3px" }}>
              <TextField
                required
                className="w-full text-black py-2 border-b border-black outline-none bg-transparent"
                id="filled-required"
                label="Last Name"
                type="text"
                placeholder="Last Name"
                defaultValue=""
                color="warning"
                variant="standard"
              />
            </div>
            <div style={{ marginBottom: "3px" }}>
              <TextField
                required
                className="w-full text-black py-2 border-b border-black outline-none bg-transparent"
                id="filled-required"
                label="Email"
                type="text"
                placeholder="Email"
                defaultValue=""
                color="warning"
                variant="standard"
              />
            </div>
            <div style={{ marginBottom: "3px" }}>
              <TextField
                required
                className="w-full text-black py-2 border-b border-black outline-none bg-transparent"
                id="filled-required"
                label="Phone"
                type="text"
                placeholder="Phone"
                defaultValue=""
                color="warning"
                variant="standard"
              />
            </div>
            <div style={{ marginBottom: "3px" }}>
              <TextField
                required
                className="w-full text-black py-2 border-b border-black outline-none bg-transparent"
                id="filled-required"
                label="Address Line 1"
                type="text"
                placeholder="Address Line 1"
                defaultValue=""
                color="warning"
                variant="standard"
              />
            </div>
            <div style={{ marginBottom: "3px" }}>
              <TextField
                required
                className="w-full text-black py-2 border-b border-black outline-none bg-transparent"
                id="filled-required"
                label="Address Line 2"
                type="text"
                placeholder="Address Line 2"
                defaultValue=""
                color="warning"
                variant="standard"
              />
            </div>

            <div style={{ marginTop: "20px" }}>
              <CountrySelect />
            </div>

            {/* <div className="w-full flex items-center justify-between mt-2">
              <div className="w-1/2 flex">
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Remember Me"
                />
              </div>
              <div>
                <Link className="text-small hover:underline" to="/signup">
                  Forgot Password?
                </Link>
              </div>
            </div> */}
            <div className="w-full flex flex-col my-4">
              <Link to="/request">
                <Button className="w-full my-2" variant="contained">
                  Register
                </Button>
              </Link>
            </div>
            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-lg  absolute text-black/80 bg-[#f5f5f5]">or</p>
            </div>
            <div className="w-full flex flex-col my-4">
              <Link to="/request">
                <Button
                  className="w-full my-2"
                  color="secondary"
                  variant="contained"
                >
                  Register with{" "}
                  <FcGoogle style={{ marginLeft: "5px", fontSize: "18px" }} />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-small font-normal text-[#060606]">
            Don't have an account?{" "}
            <Link className="underline" to="/signup">
              Signup for free
            </Link>
            <br /> <Link to="/">⬅️ navigate to home page</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
