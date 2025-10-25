import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import PostAJob from "./pages/PostAJob";
import FindCVs from "./pages/FindCVs";

// new auth imports (from auth folder)
import Signup from "./auth/Signup";
import Login from "./auth/Login";

function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-[1400px] p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/post-a-job" element={<PostAJob />} />
          <Route path="/find-cvs" element={<FindCVs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
