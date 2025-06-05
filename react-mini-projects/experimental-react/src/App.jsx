// App.jsx

import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
function  App () {
  const [userName, setUsername]= useState(JSON.parse(localStorage.getItem("Username"))??"")
  const [logIn, setLogin] = useState(false) // i am storing state like Username and login status in the App component why are you advising me to use AuthContext for storing that state??
useEffect(()=>{
  localStorage.setItem("Username", JSON.stringify(userName))
},[userName])
  return (
      <AuthContext.Provider value={{logIn,setLogin, userName, setUsername}}>
        <Navbar />
        <Login />
        <Dashboard />
      </AuthContext.Provider>
  )
}


export default App;
