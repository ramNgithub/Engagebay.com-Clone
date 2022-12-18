import React from "react";
import { Route, Routes } from "react-router-dom";
import { AutoDailer } from "../Components/AutoDailer";
import Login from "../Components/Login";
import Om from "../Components/Pricing/Om";
import Marketing from "../Components/Pricing/Pair4/Marketing";
import Biennial from "../Components/Pricing/Plans/Biennial";
import Month from "../Components/Pricing/Plans/Month";
import PriceYearly from "../Components/Pricing/Plans/PriceYearly";
import ServiceBay from "../Components/Pricing/Plans/ServiceBay";
import PricePlans from "../Components/Pricing/PricePlans";
import Home from "../Components/Ram_HomePage/Home";
import Resource from "../Components/Resource";
import SignUp from "../Components/SignUp";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/pricing" element={<Om />}></Route>
      <Route path="/resource" element={<Resource />}></Route>
      <Route path="/dailer" element={<AutoDailer />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/price" element={<Month/>} />
      <Route path="/year" element={<PriceYearly />} />
      <Route path="/biennial" element={<Biennial />} />
      <Route path="/marketing" element={<Marketing />} />
      <Route path="/service" element={<ServiceBay />} />
    </Routes>
  );
};

export default MainRoutes;
