// Navbar.jsx
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

function Navbar(){
    const {logIn,userName,setUsername,setLogin} = useContext(AuthContext)
function logOut(){
        setLogin(false)
    }
    return(
        <div>
            {(logIn === true) && <div>

                <h2>Welcome {userName}</h2> <button onClick={logOut}>Logout</button>
            </div>}
            
            {(logIn === false) && <h2>Login</h2>}
        </div>
    )
}
export default Navbar;