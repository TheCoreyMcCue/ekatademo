import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import shareVideo from "../assets/req.mp4";

import RiskModal from "../components/RiskModal";

const ChooseProduct = () => {
  const [isButton, setIsButton] = useState(false);
  const [open, setOpen] = useState(false);

  const savedPii = {
    name: JSON.parse(localStorage.getItem("name")),
    email: JSON.parse(localStorage.getItem("email")),
    phone: JSON.parse(localStorage.getItem("phone")),
    address1: JSON.parse(localStorage.getItem("address1")),
    address2: JSON.parse(localStorage.getItem("address2")),
    country: JSON.parse(localStorage.getItem("country")),
  };

  console.log("savedPII", savedPii);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
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
          // name={savedPii?.name}
          // email={savedPii?.email}
          // phone={savedPii?.phone}
          // address1={savedPii?.address1}
          // address2={savedPii.address2}
          // country={savedPii?.country}
        />
      </div>
    </div>
  );
};

export default ChooseProduct;
