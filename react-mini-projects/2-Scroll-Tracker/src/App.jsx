

import { useEffect, useState } from "react";


function App() {
 
  const [position, setPosition] = useState(0);

  useEffect (()=>{
    function handleScroll(){
      setPosition(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
    window.removeEventListener("scroll", handleScroll);
    console.log("Cleaned Up!")
    }
  },[])
 const [show, setShow] = useState(true);
  return (
    <div style={{backgroundColor: "yellow"}}>
      <div>
        <button onClick={() => setShow(prev => !prev)} style={{ position: "fixed", top: 0}}>

        {show ? "Hide Tracker" : "Show Tracker"}
      </button> 
      {position > 500 && <button onClick={()=> window.scrollTo({
        top: 0, behavior: "smooth"
      })} style={{ position: "fixed", right: 0, top: 0}}>Go to top</button>}

      </div>
      {show && <div style={{ position: "fixed", top: 0, left: "100px", background: "white", padding: "10px" }}>{position}</div>}
      
    <p style={{fontFamily: "cursive", fontSize: "20px"  }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt iusto fuga dicta esse et tempore omnis. Reprehenderit vel quidem repellendus deserunt labore blanditiis esse eos iusto vero debitis? Blanditiis. 
    </p>
 </div>
  )
  
}


export default App;
