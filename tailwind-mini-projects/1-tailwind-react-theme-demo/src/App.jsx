//App.jsx
import PersonalCard from "./components/PersonalCard";
import ResponsiveQuote from "./components/ResponsiveQuote";
import Btn from "./components/Button";
import Responsive from "./components/Responsive";
import { Themecontext } from "./contexts/Themecontext";

import { useState } from "react";
function App() {
  const [btnStat, setBtnstatus] = useState("light")
 return (
  <Themecontext.Provider value ={{btnStat, setBtnstatus}}>
    <div className={`p-5 transition-all duration-300 ${btnStat==="light"?"bg-white":"bg-black"}`}>
    <h1 className={`text-6xl md:text-8xl text-center ${btnStat==="light"?"text-black":"text-white"}`}>Tile of the site</h1>
    <Btn />
    <PersonalCard />
    <hr className={`${btnStat==="light"?"text-black":"text-white"}`}/>
    <ResponsiveQuote />
    <hr className={`${btnStat==="light"?"text-black":"text-white"}`}/>
    <Responsive />
  </div>
  </Themecontext.Provider>
  
  
 )

}


export default App;
