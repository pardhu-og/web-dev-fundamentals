// Child1.jsx
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Child1 (){
    const {theme, setTheme} = useContext(ThemeContext)
    return (
        <div style={{background: theme ==="light" ? "#ffffff" : "#121212",
            color: theme ==="light" ? "#000000":"#f0f0f0"}}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, eveniet distinctio magni, magnam saepe beatae minus vitae voluptate quo velit doloremque obcaecati ea, quibusdam dolores ut incidunt aut fugiat sed?</p>
        </div>
    )
}

export default Child1;