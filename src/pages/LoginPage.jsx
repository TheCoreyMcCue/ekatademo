import {
  Button,
  Checkbox,
  createTheme,
  FormControlLabel,
  TextField,
  ThemeProvider,
} from "@mui/material";
// import { orange } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const theme = createTheme({
    palette: {
      primary: { main: "#060606" },
      // secondary: purple,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <section className="w-full h-screen flex items-start">
        <div className="relative w-1/2 h-full flex flex-col">
          <div className="absolute top-[12%] left-[12%] flex flex-col">
            <h1 className="text-4xl text-white font-bold mt-4">
              Realize Tomorrow,
            </h1>
            <h1 className="text-4xl text-white font-bold">Today</h1>
            <p className="text-base text-white font-normal">
              Become a member today for loads of community benefits
            </p>
            {/* <Button variant="outlined">
            <Link to="/">Back</Link>
          </Button> */}
          </div>
          <img
            className="w-full h-full object-cover"
            alt="Highrise building"
            src="https://images.unsplash.com/photo-1693924614710-fb0a4865cffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
          />
        </div>
        <div className="w-1/2 h-full bg-[#F5F5F5] flex flex-col p-20 justify-between">
          <h1 className="text-xl font-semibold text-[#060606]">
            Interactive Brand
          </h1>

          <div className="w-full flex flex-col max-w-[550px]">
            <div className="w-full flex flex-col mb-7">
              <h3 className="text-2xl font-semibold mb-2">Login</h3>
              <p className="text-base mb-2">
                Welcome back! Please enter you details.
              </p>
            </div>

            <div className="w-full flex flex-col">
              <div style={{ marginBottom: "3px" }}>
                <TextField
                  required
                  className="w-full text-black py-2 border-b border-black outline-none bg-transparent"
                  id="filled-required"
                  label="Email"
                  type="email"
                  placeholder="Email"
                  defaultValue=""
                  color="warning"
                  variant="standard"
                />
              </div>
              <div style={{ marginTop: "3px" }}>
                <TextField
                  required
                  className="w-full text-black py-2 border-b border-black outline-none bg-transparent"
                  id="filled-required"
                  label="Password"
                  type="password"
                  placeholder="Password"
                  defaultValue=""
                  color="warning"
                  variant="standard"
                />
              </div>
              <div className="w-full flex items-center justify-between mt-2">
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
              </div>
              <div className="w-full flex flex-col my-4">
                {/* <div> */}
                <Button className="w-full" variant="contained">
                  Success
                </Button>
                {/* </div> */}
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <p className="text-small font-normal text-[#060606]">
              Don't have an account?{" "}
              {/* <span className="border-[10px] border-[#F89F15]"> */}
              <Link className="underline" to="/signup">
                Signup for free
              </Link>
              {/* <br /> <Link to="/">⬅️ navigate to home page</Link> */}
              {/* </span> */}
            </p>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
};

export default LoginPage;
