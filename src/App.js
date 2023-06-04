import React from "react";
import { Routes,Route } from "react-router-dom";
import About from "./components/about/About";
import ContactUS from "./components/contact/ContactUs";
import Login from "./components/contact/Login";
import Signup from "./components/contact/SignUp";
import Footer from "./components/footer/Footer";
import Appbar from "./components/header/Appbar";
import Home from "./components/home/Home";
import HostelGallery from "./components/hostelgallery/HostelGallery";
import Rooms from "./components/rooms/Rooms";
import Hostel from "./components/hostel/Hostel";
function App() {
  return (
    <>
      <Appbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/hostel" element={<Hostel/>} />
          <Route path="hostel/room" element={<Rooms/>} />
          <Route path="/hostelgallery" element={<HostelGallery />} />
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
