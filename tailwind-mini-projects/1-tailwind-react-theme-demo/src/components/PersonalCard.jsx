//PersonalCard.jsx
import Dog from "../assets/images.jpg"

export default function PersonalCard (){
return <div className="w-60 p-4 md:p-6 mx-auto my-20 bg-red-200 hover:bg-blue-300 text-md md:text-xl text-gray-600 shadow-2xl rounded-2xl transition-all duration-300" >
        <img className="rounded-full object-cover w-30 h-24 mx-auto"src={Dog} alt="Dog Labrador"/>
        <p><span className="font-bold">Name:</span> <span>Ruther</span></p>
        <p><span className="font-bold">Short bio:</span> <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, possimus.</span></p>

</div>
}