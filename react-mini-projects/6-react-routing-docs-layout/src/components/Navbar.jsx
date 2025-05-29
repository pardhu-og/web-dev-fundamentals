// Navbar.jsx
import { Link } from "react-router-dom";

function Navbar(){
    return (
     <nav>
      <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/docs">Docs</Link>
            <ul><li><Link to="/docs/Html">HTML Docs</Link></li>
            <li><Link to="/docs/CSS">CSS Docs</Link></li>
            <li><Link to="/docs/js">JavaScript Docs</Link>
            </li>
            </ul>
        </li>
        <li><Link to="/about" >About</Link></li>
     </ul>
        </nav>
    )
}

export default Navbar;