//Navbar.jsx
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { Navcontext } from '../contexts/Navcontext';
import { SquareX, Menu } from 'lucide-react';

export default function Navbar(){
    const {nav, setNav} = useContext(Navcontext)
    return(
        <div className='relative'>
            <nav className={`bg-gray-700 text-white  relative flex flex-col gap-4  text-center 
            md:flex-col md:text-left md:pt-8 md:w-auto md:h-full p-4
            ${ !nav ? "h-screen":"h-auto"}`}>
            <div className='flex flex-row justify-between p-4'>
                <h2 className='text-2xl'>Nirvana</h2>
                <button onClick={()=>setNav(false)} className={`block ${ !nav ? "hidden":"visible"} md:hidden`}>{<Menu/>}</button>
            </div>
            <div className={`flex flex-col gap-4 ${ nav ? "hidden":"visible"} md:flex md:items-center`}>
            <Link to="/" onClick={()=>setNav(true)}  className="hover:underline">Home</Link>
            <Link to="/pricing" onClick={()=>setNav(true)} className="hover:underline">Pricing</Link>
            <Link to='/cards' onClick={()=>setNav(true)} className="hover:underline">Cards</Link>
            <Link to='/about' onClick={()=>setNav(true)} className="hover:underline">About</Link>
            </div>
        </nav>
        <div> 
            <button onClick={()=>setNav(true)} className='absolute top-8 right-8'>{<SquareX className={`fill-white w-8 h-8 ${ nav ? "hidden":"visible"} md:hidden`}/>}</button>
        </div>
        </div>
    );
}
