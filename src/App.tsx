import React from 'react';
import Heading from "./components/Heading";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
        <Heading />
        <Home />
        <Projects />
    </div>
  );
}

export default App;
