//Navbar.jsx
import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <nav className="bg-gray-700 text-white px-4 py-2 flex gap-4 justify-center">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/profilecards" className="hover:underline">Profile Cards</Link>
            <Link to="/dashboard" className="hover:underline">Dash Board</Link>
            <Link to="/gallery" className="hover:underline">Image Gallery</Link>
        </nav>
    );
}
