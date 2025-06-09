//App.jsx
import Login from "./components/Login";
import ResponsivePricing from "./components/ResponsivePriceing";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
function App() {
  
 return (
     <div>
     <Navbar />
     <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/plans" element ={<ResponsivePricing />} />
     </Routes>
    
    </div>

 )

}


export default App;
