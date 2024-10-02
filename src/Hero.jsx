import { useState } from "react";
import Sidenav from "./components/Sidenav.jsx";
import Main from "./components/Main.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Resume from "./components/Resume.jsx";
function Hero() {
  return (
    <div>
      <Main />
      <Resume />
      <Projects />
      <Contact />
      <Sidenav />
    </div>
  );
}

export default Hero;
