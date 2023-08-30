import React from "react";
import NavBar from "../components/layouts/NavBar";
import Hero from "../components/modules/landingPage/Hero";
import Signup from "../components/modules/landingPage/Signup";
import Login from "../components/modules/landingPage/Login";
import { useState } from "react";

const LandingPage = () => {
  const [view, setView] = useState("hero");

  const handleView = (viewName) => {
    setView(viewName);
  };

  return (
    <div className="p-2">
      <NavBar setView={handleView} />
      {view === "hero" && <Hero />}
      {view === "login" && <Login />}
      {view === "signup" && <Signup />}
    </div>
  );
};

export default LandingPage;
