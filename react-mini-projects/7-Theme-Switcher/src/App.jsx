// App.jsx
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Header from "./components/Header";

import { ThemeContext } from "./ThemeContext";
import { useState } from "react";
function App() {
  
const [theme, setTheme] = useState (JSON.parse(localStorage.getItem("theme")) || "light")
localStorage.setItem("theme", JSON.stringify(theme))

  return (
    <div style={{background: theme ==="light" ? "#ffffff" : "#121212",
            color: theme ==="light" ? "#000000":"#f0f0f0"}} onClick={()=>setTheme(theme==="light"? "dark" : "light")}>
      <ThemeContext.Provider value={{theme, setTheme}}>
      <Header />
      <button  style={{background: theme ==="light" ? "#ffffff" : "#121212",
            color: theme ==="light" ? "#000000":"#f0f0f0"}} onClick={()=>
            {setTheme(theme=>theme ==="light"? "dark" : "light");
              
              localStorage.setItem("theme", JSON.stringify(theme))
             
            }}>Toggle Theme</button>
      <Child1 />
      <Child2 />
      </ThemeContext.Provider>
    </div>
  )
}

export default App;
