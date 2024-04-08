import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./About/About";
import Contact from './Contact/Contact';
import Menu from "./Menu";
import Service from "./Service/Service";
import PetShop from "./PetShop/PetShop";
import "./App.css";
import Login from "./Login/Login";
import Signup from './Signup/Signup';
import React from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route exact path="/" element={<PetShop name="pet-shop" />} />
          <Route path="/about" element={<About name="About" />} />
          <Route path="/service" element={<Service name="Service" />} />
          <Route path="/login" element={<Login name="login" />} />
          <Route path="/signup" element={<Signup name="signup" />} />
          <Route path="/contact" element={<Contact name="Contact" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;