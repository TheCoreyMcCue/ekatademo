import React, { useEffect, useState } from "react";
// import { Button } from "@mui/material";
// import { Link } from "react-router-dom";
import shareVideo from "../assets/req.mp4";

import { lowRiskAoResponse } from "../data/apiData";
import RiskModal from "../components/RiskModal";

const ChooseProduct = () => {
  const [isButton, setIsButton] = useState(false);
  const [open, setOpen] = useState(false);
  const [signalOpen, setSignalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const savedPii = {
    name: JSON.parse(localStorage.getItem("name")),
    email: JSON.parse(localStorage.getItem("email")),
    phone: JSON.parse(localStorage.getItem("phone")),
    address1: JSON.parse(localStorage.getItem("address1")),
    address2: JSON.parse(localStorage.getItem("address2")),
    country: JSON.parse(localStorage.getItem("country")),
  };

  console.log("lowRiskAoResponse", lowRiskAoResponse, isButton);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
      console.log("here");
    }, 2000);
    return () => clearTimeout(timer);
  }, [setIsButton]);

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <RiskModal
          open={open}
          setOpen={setOpen}
          savedPii={savedPii}
          signalOpen={signalOpen}
          setSignalOpen={setSignalOpen}
          setLoading={setLoading}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ChooseProduct;
