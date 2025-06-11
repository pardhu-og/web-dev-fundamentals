//App.jsx
 
import Products from "./components/Products"
import { useState } from "react";
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Cartcontext } from './contexts/Cartcontext'
import Checkout from "./pages/Checkout";
import Conformation from "./pages/Conformation";
function App (){
const [cart, setCart] = useState({})

  return (
    <div className="m-4 ">
      <h1 className="text-center text-4xl mb-2">Market Place</h1>
      <Navbar />
    <Cartcontext.Provider value={{cart, setCart}}>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Checkout />} />
        <Route path = "/conformation" element={<Conformation />} />
        <Route path="*" element={<p className="text-center mt-12 text-xl">Page not found</p>} />
      </Routes>
    </Cartcontext.Provider>
    </div>
  )
}

export default App;