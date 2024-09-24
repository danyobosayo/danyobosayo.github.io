import { useState } from "react";
import Sidenav from "./components/Sidenav.jsx";
import Main from "./components/Main.jsx";
import Projects from "./components/Projects.jsx";
function App() {
  return (
    <div>
      <Main />
      <Sidenav />
      <Projects />
    </div>
  );
}

export default App;
