//Checkout.jsx
import { Cartcontext } from '../contexts/Cartcontext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
export default function Checkout (){
        const {cart, setCart} =useContext(Cartcontext)

        return (
                <div >
                <h1 className='text-4xl text-center m-4'>Order Summary</h1>
                <div className='overflow-x-auto'>
                               
                <table className='border table-auto min-w-full'>
                        <thead>
                         <tr>
                           <th className='border p-4'>S.no</th>
                           <th className='border p-4 '>Name of Product</th>
                           <th className='border p-4 '>Price</th>
                           <th className='border p-4 '>Quantity</th>
                           <th className='border p-4 '>Total cost</th>
                         </tr>
                        </thead>
                        <tbody>
                           {Object.values(cart).map((p,i)=>
                        <tr key={p.name}>
                                <td className='border p-4 '>{i+1}</td>
                                <td className='border p-4 '>{p.name}</td>
                                <td className='border p-4 text-right '>$ {p.price}</td>
                                <td className='border p-4 text-right'>{p.items}</td>
                                <td className='border p-4 text-right'>$ {p.price * p.items}</td>
                        </tr>
                        )}
                        <tr>
                          <td colSpan={4} className='text-right border p-5 px-8' >Total</td>
                          <td className='text-right p-5' >$ {Object.values(cart).reduce((sum,p)=>{
                                sum = sum + (p.price * p.items)
                                return sum
                          },0)}</td>
                        </tr>
                        </tbody>
                </table>
                </div>

                <Link className="hover:bg-blue-800  hover:text-white block my-10 mx-auto w-fit rounded-xl " to="/conformation"><button className=' block bg-blue-400 px-4 py-2 rounded-xl h-full hover:cursor-pointer' onClick={()=>setCart({})}> Buy</button></Link>

                </div>
        )
  

}

