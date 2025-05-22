//will have rought practice while lerning react

import { useState } from "react";

function App (){
    
    const [count, setCount] = useState(false);
        return (
         <div>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(!count)}>{count? `hide details` :`Show details`}</button>
      {count && <p>This is additional description about me!</p>}
    </div>
    );
}

export default App