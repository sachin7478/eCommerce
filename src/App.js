import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
// import image from './main_img.jpg';
import Home from "./Components/Home";
import Products from "./Components/Products";

import Prod from "./Components/Prod";
import Cart from "./Components/Cart";
import Login from './Login';
import Register from './Register';
// test
function App() {
  return (
    <>
      {/* <div className="App" > */}
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Prod />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        
      </Routes>
      {/* <ProductList></ProductList> */}

      {/* <div style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + "/bg image.jpg"})`,
      height: "540px", backgroundRepeat: "no-repeat", width:"100%",
      
    }} ></div>  */}

      {/* </div> */}
    </>
  );
}

export default App;
