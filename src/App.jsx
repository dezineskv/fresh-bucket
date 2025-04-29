import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/global.css";
import MainLayout from "./layouts/MainLayout";
import ProductDetails from './pages/ProductDetails';
import React, { useState } from "react";
import OrderHistory from "./pages/OrderHistory";

// using element mainLayout for components w/out paths
function App() {
  const [singleProducts, setSingleProducts] = useState([]);

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/orders" element={<OrderHistory />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
