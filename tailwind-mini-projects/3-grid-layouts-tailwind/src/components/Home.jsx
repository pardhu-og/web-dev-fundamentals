//Home.jsx
import { Link } from "react-router-dom"
export default function Home (){
    return (
        <div className="h-screen bg-orange-400 flex flex-col justify-center items-center gap-8">
            <h1 className="text-white text-center text-6xl">Grid Layouts Tailwind </h1>
            <div className=" text-purple-800 font-bold flex flex-row gap-6">
                <Link to="/profilecards" className=" hover:scale-105 hover:underline hover:text-red-800 transition-all duration-300">Profile Cards</Link>
                <Link to="/dashboard" className=" hover:scale-105 hover:underline hover:text-red-800 transition-all duration-300">Dash Board</Link>
                <Link to="/gallery" className=" hover:scale-105 hover:underline hover:text-red-800 transition-all duration-300">Image Gallery</Link>
            </div>
        </div>
    )
}