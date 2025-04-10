import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/global.css";
import MainLayout from "./layouts/MainLayout";
import ProductDetails from './pages/ProductDetails';
import React, { createContext, useState } from "react";

export const ProductsContext = createContext();

// using element mainLayout for components w/out paths
function App() {
  // state for products
  const [singleProducts, setSingleProducts] = useState([]);

  return (
    <ProductsContext.Provider value={[singleProducts, setSingleProducts]}>
      <>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product/:id" element={<ProductDetails />}></Route>
          </Route>
        </Routes>
      </>
    </ProductsContext.Provider>
  );
}

export default App;
