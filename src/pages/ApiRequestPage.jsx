import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
// import mainLogo from "../assets/Mastercard_2019_logo.png";
import shareVideo from "../assets/req.mp4";

const ChooseProduct = () => {
  const [isButton, setIsButton] = useState(false);

  // const delayedRender = () => {
  //   setTimeout(() => {
  //     <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
  //       <Link to="/signals">
  //         <Button
  //           style={{ marginLeft: "0.5rem" }}
  //           variant="outlined"
  //           color="warning"
  //         >
  //           Click to follow the data on its journey
  //         </Button>
  //       </Link>

  //       <div className="shadow-2xl"></div>
  //     </div>;
  //   }, "4000");
  // };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButton(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [setIsButton]);

  // useEffect(() => {
  //   return () => {
  //     setTimeout(() => {
  //       setIsButton(true);
  //     }, "4000");
  //   };
  // }, [isButton, setIsButton]);

  // console.log(
  //   localStorage.getItem("name"),
  //   localStorage.getItem("email"),
  //   localStorage.getItem("phone"),
  //   localStorage.getItem("country")
  // );

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
        {isButton && (
          <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
            <Link to="/signals">
              <Button
                style={{ marginLeft: "0.5rem" }}
                variant="outlined"
                color="warning"
              >
                Click to follow the data on its journey
              </Button>
            </Link>

            <div className="shadow-2xl"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChooseProduct;
