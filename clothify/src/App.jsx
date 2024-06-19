// App.js

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Confirm from "./pages/Confirm";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css"; // Import the CSS file for layout

const App = () => {
  return (
    <BrowserRouter>
      <div id="root">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/confirm"
              element={<ProtectedRoute element={<Confirm />} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
