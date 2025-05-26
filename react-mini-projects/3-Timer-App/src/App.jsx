
import { useEffect, useState } from "react";


function App() {
 const [count,setCount] = useState(0)

 const [status, setStatus] =useState(false)


 useEffect(()=>{
if (status){
        const time = setInterval(()=>{
            setCount(count => count + 1)
            },1000)
      //  console.log("useEffect ran")
        return () =>{
          clearInterval(time)
       //   console.log("useEffect cleared")
        }}
      },[status])

 
 

  return(
    <div>
      <p>The time is {count} seconds</p>
      <button onClick={()=>setStatus(!status)}>{status? "Stop":"Start"}</button>
      <button onClick={()=>{
        setStatus(false)
        setCount(0)
      }}>Reset</button>
    </div>
  )
  
}


export default App;