import React, { useState } from "react";
import { Button, createTheme, TextField } from "@mui/material";
import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import CountrySelect from "../components/CountryList";
import ResponsiveAppBar from "../components/Navbar";

const SignupPage = () => {
  const theme = createTheme({
    palette: {
      primary: { main: "#060606" },
      secondary: { main: "#f5f5f5" },
    },
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [country, setCountry] = useState("");

  const assignItems = () => {
    localStorage.setItem("name", JSON.stringify(`${firstName} ${lastName}`));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("phone", JSON.stringify(phone));
    localStorage.setItem("address1", JSON.stringify(address1));
    localStorage.setItem("address2", JSON.stringify(address2));
    localStorage.setItem("country", JSON.stringify(country));
  };

  return (
    <section>
      <ResponsiveAppBar />
      <div className="w-screen h-100 bg-[#F5F5F5] flex flex-col p-10 justify-between items-center">
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
                label="First Name"
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                color="warning"
                variant="standard"
              />
            </div>
            <div style={{ marginBottom: "3px" }}>
              <TextField
                required
                className="w-full text-black py-2 border-b border-black outline-none bg-transparent"
                label="Last Name"
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                color="warning"
                variant="standard"
              />
            </div>
            <div style={{ marginBottom: "3px" }}>
              <TextField
                required
                className="w-full text-black py-2 border-b border-black outline-none bg-transparent"
                label="Email"
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                color="warning"
                variant="standard"
              />
            </div>
            <div style={{ marginBottom: "3px" }}>
              <TextField
                required
                className="w-full text-black py-2 border-b border-black outline-none bg-transparent"
                label="Phone"
                type="text"
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
                color="warning"
                variant="standard"
              />
            </div>
            <div style={{ marginBottom: "3px" }}>
              <TextField
                required
                className="w-full text-black py-2 border-b border-black outline-none bg-transparent"
                label="Address Line 1"
                type="text"
                placeholder="Address Line 1"
                onChange={(e) => setAddress1(e.target.value)}
                color="warning"
                variant="standard"
              />
            </div>
            <div style={{ marginBottom: "3px" }}>
              <TextField
                required
                className="w-full text-black py-2 border-b border-black outline-none bg-transparent"
                label="City"
                type="text"
                placeholder="City"
                onChange={(e) => setAddress2(e.target.value)}
                color="warning"
                variant="standard"
              />
            </div>

            <div style={{ marginTop: "20px" }}>
              <CountrySelect setCountry={setCountry} />
            </div>
            <div className="w-full flex flex-col my-4">
              <Link to="/request">
                <Button
                  className="w-full my-2"
                  variant="contained"
                  onClick={() => assignItems()}
                >
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
                  onClick={() => assignItems()}
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
            <Link to="/">⬅️ navigate to home page</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
