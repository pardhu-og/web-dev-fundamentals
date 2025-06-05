// Login.jsx

import { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";


function Login (){
    const [input, setInput] = useState(JSON.parse(localStorage.getItem("Username"))||"")
    const {logIn, setUsername, setLogin,userName} = useContext(AuthContext)
    function handleChange(e){
            setInput(e.target.value)
    }
    function handleClick(){
            if(input.trim() !=="") {
                setUsername(input)
                setLogin(true)
            }
    }
    
    return (
        <div>
            {(logIn === false) && (<div>
            <input type="text" placeholder="Enter User Name..." onChange={handleChange} value={input}/>
            
        <button onClick={handleClick}>Login</button>
        </div>)}
        
        </div>
    )
}

export default Login;