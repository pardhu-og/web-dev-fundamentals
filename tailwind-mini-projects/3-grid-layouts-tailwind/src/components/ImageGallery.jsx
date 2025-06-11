// ImageGallery.jsx
import img1 from "../assets/Images/1.jpg"
import img2 from "../assets/Images/2.jpg"
import img3 from "../assets/Images/3.jpg"
import img4 from "../assets/Images/4.jpg"
import img5 from "../assets/Images/5.jpg"
import img6 from "../assets/Images/6.avif"
import img7 from "../assets/Images/7.avif"
import img8 from "../assets/Images/8.avif"
import img9 from "../assets/Images/9.avif"
import img10 from "../assets/Images/10.avif"
import img11 from "../assets/Images/11.avif"
import img12 from "../assets/Images/12.avif"
import img13 from "../assets/Images/13.avif"
import img14 from "../assets/Images/14.avif"
import Navbar from "./Navbar";

export default function ImageGallery (){
    
    return (
       <div>
        <Navbar />
        <div className="m-5">
        <h1 className="text-center text-4xl font-mono italic">Image Gallery</h1>
         <div className=" border-2 border-gray-200 rounded-xl shadow-lg grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5 grid-flow-row-dense m-5 p-5">
            <img className="card1" src={img1} alt="img1" />
            <img className="card1" src={img2} alt="img2" />
            <img className="card1" src={img3} alt="img3" />
            <img className="card1" src={img4} alt="img4" />
            <img className="card1" src={img5} alt="img5" />
            <img className="card1" src={img6} alt="img6" />
            <img className="card1" src={img7} alt="img7" />
            <img className="card1" src={img8} alt="img8" />
            <img className="card1" src={img9} alt="img9" />
            <img className="card1" src={img10} alt="img10" />
            <img className="card1" src={img11} alt="img11" />
            <img className="card1" src={img12} alt="img12" />
            <img className="card1" src={img13} alt="img13" />
            <img className="card1" src={img14} alt="img14" />

        </div>
       </div>
       </div>
    )
}