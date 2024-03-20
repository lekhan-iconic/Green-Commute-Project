import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import Weather from "./components/Weather.js";
import Users from "./components/Users.js";
import Randomusers from "./components/Randomusers.js";
import Products from "./components/Products.js";

import "./App.css";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/weather" element={<Weather />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/randomusers" element={<Randomusers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
