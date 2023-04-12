import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoutes";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import Contact from "../Pages/Contact";
import Fashion from "../Pages/Fashion";
import Home from "../Pages/Home";
import News from "../Pages/News";
import Payment from "../Pages/Payment";
import Products from "../Pages/Products";
import Shopping from "../Pages/Shopping";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/products"
        element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        }
      />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/news" element={<News />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route path="/payment" element={<Payment />} />
      <Route path="/shopping" element={<Shopping />} />
    </Routes>
  );
};

export default AllRoutes;
