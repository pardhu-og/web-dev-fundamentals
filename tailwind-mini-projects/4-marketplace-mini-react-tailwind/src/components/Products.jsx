// Products.jsx
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import  fan  from '../images/Fan.webp'
import bike from '../images/Bike.avif'
import book from '../images/Book.jpg'
import car from '../images/car.jpg'
import coffee from '../images/Coffee.webp'
import helecopter from "../images/Helecopter.jpg"
import house from '../images/House.jpg'
import mouse from '../images/mouse.avif'
import pen from '../images/pen.jpg'
import phone from '../images/Phone.webp'
import plane from '../images/plane.jpg'
import ship from '../images/Ship.jpg'
import train from '../images/Train.jpg'
import computer from '../images/Computer.jpg'
import { Cartcontext } from '../contexts/Cartcontext'

const products = [
    {
    Id: 1,
    name: "Bike",
    img: bike,
    price: 250,
    quote: "Your ticket to escaping traffic and pretending you're in the Tour de France on your way to the grocery store",
    description: "A two-wheeled marvel of human-powered transportation. Perfect for scenic rides, getting in shape, and making car owners jealous of your parking options.",
    inventory: Math.floor( Math.random() *100)
},
    {
    Id: 2,
    name: "Book",
    img: book,
    price: 15,
    quote: " A small price to pay for a journey to another world",
    description: " A portable portal to endless adventures, knowledge, and the perfect excuse to ignore everyone around you. Batteries not required.",
    inventory: Math.floor( Math.random() *100)
    },

    {
    Id: 3,
    name: "Car",
    img: car,
    price: 25000,
    quote: " The cost of freedom, road trips, and singing terribly to your favorite songs at the top of your lungs.",
    description: "Your personal metal box on wheels. It gets you from point A to point B and serves as a mobile storage unit for miscellaneous items you've forgotten about.",
    inventory: Math.floor( Math.random() *100)
    },

    {
    Id: 4,
    name: "Coffee",
    img: coffee,
    price: 5,
    quote: " The daily fee for functioning like a human being",
    description: " A magical brown liquid that turns 'I can't even' into 'I can.' The most essential part of a balanced workday.",
    inventory: Math.floor( Math.random() *100)
    },

  {
    Id: 5,
    name: "Computer",
    img: computer,
    price: 1200,
    quote: " The price of admission to the internet, endless work, and a universe of cat videos",
    description: "A complex machine designed to solve problems you didn't know you had in ways you don't understand. Also, it's great for online shopping.",
    inventory: Math.floor( Math.random() *100)
    },

 {
    Id: 6,
    name: "Fan",
    img: fan,
    price: 30,
    quote: "A small investment for a personal wind machine",
    description: "A loyal companion for hot days that provides a soothing breeze and doubles as a white noise machine. Just don't talk into it... or do, we're not your boss.",
    inventory: Math.floor( Math.random() *100)
    },

     {
    Id: 7,
    name: "Helicopter",
    img: helecopter,
    price: 2000000,
    quote: "For when you absolutely, positively need to land on a rooftop",
    description: "A flying machine that goes 'thwop thwop thwop.' It's like a fan that decided to see the world.",
    inventory: Math.floor( Math.random() *100)
    },

     {
    Id: 8,
    name: "House",
    img: house,
    price: 350000,
    quote: "The cost of a place to put all your stuff and a mortgage that will be your friend for 30 years",
    description: "A stationary box where you can live, eat, sleep, and accumulate an impressive collection of mismatched socks.",
    inventory: Math.floor( Math.random() *100)
    },

    {
    Id: 9,
    name: "Mouse",
    img: mouse,
    price: 20,
    quote: "The affordable sidekick to your computer adventures",
    description: "The small, clickable creature that guides your cursor through the digital world. Please don't feed it cheese",
    inventory: Math.floor( Math.random() *100)
    },
    
{
    Id: 10,
    name: "Pen",
    img: pen,
    price: 20,
    quote: " A small price for the power to sign your name with a flourish",
    description: "A simple tool for jotting down brilliant ideas, doodling during meetings, and occasionally leaking ink all over your favorite shirt.",
    inventory: Math.floor( Math.random() *100)
    },

    {
    Id: 11,
    name: "Phone",
    img: phone,
    price: 999 ,
    quote: " Your connection to everything, everywhere, all at once",
    description: "A pocket-sized supercomputer that lets you talk to people, take amazing photos, and endlessly scroll through social media.",
    inventory: Math.floor( Math.random() *100)
    },

      {
    Id: 12,
    name: "Plane",
    img: plane,
    price: 150000000,
    quote: "The ultimate travel accessory for those who find roads too mainstream",
    description: "A metal tube with wings that magically soars through the sky, offering tiny bags of pretzels and breathtaking views of the clouds.",
    inventory: Math.floor( Math.random() *100)
    },

       {
    Id: 13,
    name: "Ship",
    img: ship,
    price: 500000000,
    quote: "For when you want to take your entire house on a vacation across the ocean",
    description: " A massive floating vessel that can carry thousands of people, cars, and containers. Just try to avoid icebergs.",
    inventory: Math.floor( Math.random() *100)
    },

      {
    Id: 14,
    name: "Train",
    img: train,
    price: 1000000000,
    quote: "A rhythmic and scenic way to travel without the stress of driving",
    description: "A long, connected series of carriages that chugs along on a track, offering a relaxing journey and the gentle clickety-clack sound of the rails.",
    inventory: Math.floor( Math.random() *100)
    },

]

export default function Products (){
    const {cart, setCart} = useContext(Cartcontext)


const y = Object.values(cart).reduce((sum,x)=>{
                sum = sum + x.items
                return sum
        },0)

function handleClick(e){
   const x = {...cart}
   const g = x[e.target.dataset.id] ? x[e.target.dataset.id].items :0
    x[e.target.dataset.id] = {"name":e.target.name,
            "price":Number(e.target.dataset.price),
            "items": g + 1
    }
    setCart(x)
 
}

    return (
    <div>
    <div className="text-right mt-2" ><Link className='w-fit' to="/cart"><button className='bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white hover:cursor-pointer active:scale-90 transition-all '>Cart: {y}</button></Link></div>
    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 m-8 p-4 rounded-2xl shadow border border-gray-400'> 
        {products.map(p=>
            <div key={p.Id} className='p-4 flex flex-col gap-2 items-center border-1 border-gray-400 rounded-xl'>
                <img className='aspect-square object-fill p-1 w-64 border-1' src={p.img} alt="p.name" />
                <h3><span className='font-bold'>{p.name}</span></h3>
                <h3><span className='font-bold'>Price: </span>$ {p.price}</h3>
                <p className='italic'>"{p.quote}"</p>
                <p>{p.description}</p>
                <button className='bg-blue-400 px-2 py-1 mt-4 rounded-lg hover:bg-blue-700 hover:text-white hover:cursor-pointer active:scale-90 transition-all' name={p.name} data-price={p.price} data-id={p.Id} onClick={(e)=>handleClick(e)}>Add to cart</button>
                <p>Only {p.inventory} items remaining!</p>
            </div>
        )}
    </div>
    </div>
    )
}

