//Navbar.jsx
import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <nav className="bg-gray-700 text-white px-4 py-2 flex gap-4 justify-center">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/plans" className="hover:underline">Plans</Link>
        </nav>
    );
}
