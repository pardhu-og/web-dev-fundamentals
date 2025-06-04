//Header.jsx
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";


function Header(){
const {theme, setTheme} = useContext(ThemeContext)
    return (
        <>
        <h1 style={{textAlign:"center", 
            background: theme ==="light" ? "#ffffff" : "#121212",
            color: theme ==="light" ? "#000000":"#f0f0f0"}}>This is the heading of the Site</h1>
        </>
    )
}

export default Header;