// useInput.js
import { useState } from "react";


function useInput(initialValue = ""){
    const [input, setInput] = useState(initialValue)

function read(x){
    setInput(x.target.value)
}

function reset(){
    setInput(initialValue)
}
return {input, read, reset}
}

export default useInput