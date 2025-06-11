// GridProfilecard.jsx
 import img1  from '../assets/1.jpg'
 import img2 from '../assets/2.jpg'
 import img3 from '../assets/3.png'
 import img4 from '../assets/4.jpg'
 import img5 from '../assets/5.jpg'
 import img6 from '../assets/6.png'
 import Navbar from "./Navbar";

export default function GridProfilecards (){
 

 return (
    <div>
      <Navbar />
      <div className="bg-white h-auto flex flex-col place-items-center m-4 md:m-8 lg:m-12 gap-7 justify-around">
      <h1 className="text-4xl font-mono italic font-bold">Profile Cards</h1>
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        <div className=" card">
          <img className=" h-50" src={img1} alt="Sponge" />
          <p><span className="font-bold">Name: </span>Sponge Bob</p>
          <p><span className="font-bold">Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsum.</p>
        </div>

        <div className="card">
          <img className="h-50 " src={img2} alt="Micky" />
          <p><span className="font-bold">Name: </span>Micky</p>
          <p><span className="font-bold">Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsum.</p>
        </div>

        <div className="card">
          <img className="h-50" src={img3} alt="Dora" />
          <p><span className="font-bold">Name: </span>Dora</p>
          <p><span className="font-bold">Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsum.</p>
        </div>

        <div className="card">
          <img className="h-50" src={img4} alt="Bubbles" />
          <p><span className="font-bold">Name: </span>Bubbles</p>
          <p><span className="font-bold">Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsum.</p>
        </div>

        <div className="card">
          <img className="h-50" src={img5} alt="Birdie" />
          <p><span className="font-bold">Name: </span>Birdie</p>
          <p><span className="font-bold">Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsum.</p>
        </div>

        <div className="card">
          <img className="h-50" src={img6} alt="Winnie" />
          <p><span className="font-bold">Name: </span>Winnie</p>
          <p><span className="font-bold">Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsum.</p>
        </div>
      </div>
    </div>
    </div>
 )
}