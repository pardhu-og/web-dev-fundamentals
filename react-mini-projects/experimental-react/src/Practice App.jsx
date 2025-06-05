//will have rought practice while lerning react

import { useEffect, useState } from "react";


  


function App (){
 const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect ran, count:", count);

    return () => {
      console.log("Cleanup for count:", count);
    };
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default App