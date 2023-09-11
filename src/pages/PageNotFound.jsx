import React from "react";
import { Link } from "react-router-dom";
import shareVideo from "../assets/static.mp4";

const PageNotFound = () => {
  return (
    <Link to="/">
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
        </div>
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
          <h1 className="pt-5 text-2xl" style={{ color: "#F89F15" }}>
            Oops <br />
            Page Not Found <br />
            Click anywhere to return to home page
          </h1>
          {/* <div className="p-5 text-xl"> */}

          {/* </div> */}

          <div className="shadow-2xl"></div>
        </div>
      </div>
    </Link>
  );
};

export default PageNotFound;
