import { useState } from "react";
import Sidenav from "./components/Sidenav.jsx";
import Main from "./components/Main.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Resume from "./components/Resume.jsx";
function App() {
  return (
    <div>
      <Main />
      <Sidenav />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
