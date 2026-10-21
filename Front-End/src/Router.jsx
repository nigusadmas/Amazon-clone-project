import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import SignUp from ".//Pages/Auth/SignUp";
import Payment from "./Pages/Payments/Payment";
import Order from "./Pages/Orders/Order";
import Cart from "./Pages/Cart/Cart";
import Result from "./Pages/Results/Result";
import ProductDetails from "../src/Pages/ProductDetails/ProductDetails";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/carts" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
