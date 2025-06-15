// App.jsx

import GridProfilecard from "./components/GridProfilecard";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ResponsivePricing from "./components/ResponsivePriceing"
import About from "./pages/About";
import {Routes, Route} from "react-router-dom"
import { useState } from "react";
import { Navcontext } from './contexts/Navcontext'

const App = () => {
  const[nav, setNav] = useState(true)
  return (
    <div className="md:flex">
      <Navcontext.Provider value ={{nav, setNav}}>
        <Navbar /> 
      <div className={`flex-1 ${nav ? "visible":"hidden"} md:flex`}>
        <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/pricing" element={<ResponsivePricing/>} />
        <Route path="/cards" element={<GridProfilecard/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<p className="text-center mt-12 text-xl">Page not found</p>} />
      </Routes>
      </div>
      </Navcontext.Provider>
      
    </div>
  );
};

export default App;