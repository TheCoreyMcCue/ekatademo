import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import mainLogo from "../assets/Mastercard_2019_logo.png";
import shareVideo from "../assets/req.mp4";

const ChooseProduct = () => (
  <div className="flex justify-start items-center flex-col h-screen">
    <div className=" relative w-full h-full">
      {/* <h1
        className="p-5 text-xl text-center"
        style={{ color: "white", backgroundColor: "black" }}
      >
        Ekata Product Demo
      </h1> */}
      <video
        src={shareVideo}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
        className="w-full h-full object-cover"
      />
      {/* <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
        <div className="p-1">
          <img src={mainLogo} alt="" width="130px" />
        </div>
        <h2 className="pt-5 text-l" style={{ color: "#F89F15" }}>
          Select a Product
        </h2>
        <div className="p-5 text-xl">
          <Link to="/login">
            <Button
              style={{ marginRight: "0.5rem" }}
              variant="outlined"
              color="warning"
            >
              Account Opening
            </Button>
          </Link>
          <Link to="/cart">
            <Button
              style={{ marginLeft: "0.5rem" }}
              variant="outlined"
              color="warning"
            >
              Transaction Risk
            </Button>
          </Link>
        </div>

        <div className="shadow-2xl"></div>
      </div> */}
    </div>
  </div>
);

export default ChooseProduct;
