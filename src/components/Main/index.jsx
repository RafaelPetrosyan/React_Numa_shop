import { Route, Routes, Navigate } from "react-router-dom";
import AboutUs from "../AboutUs";
import Shop from "../Shop";
import PageNotFound from "../PageNotFound";
import Cart from "../Cart";

import "./style.css";

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to={"/404"} />} />
      </Routes>
    </div>
  );
};

export default Main;
