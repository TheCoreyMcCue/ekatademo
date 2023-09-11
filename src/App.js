import React from "react";
import "./App.css";
// import RegForm from "./components/regForm";
// import Signup from "./components/Signup";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import mainLogo from "./assets/Mastercard_2019_logo.png";
// import Landing from "./components/Landing";

import {
  ChooseProduct,
  LoginPage,
  SignupPage,
  ShoppingCart,
  ApiRequestPage,
  ApiResponsePage,
  SignalBreakdownPage,
  PageNotFound,
} from "./pages";

const App = () => {
  // const Desktop = useMediaQuery("(min-width:1100px)");
  // const Ipad = useMediaQuery("(min-width:760px)");
  // const Mobile = useMediaQuery("(min-width:500px)");

  return (
    <div>
      <Routes>
        <Route path="/" element={<ChooseProduct />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/request" element={<ApiRequestPage />} />
        <Route path="/response" element={<ApiResponsePage />} />
        <Route path="/signals" element={<SignalBreakdownPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
