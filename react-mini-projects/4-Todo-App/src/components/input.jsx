
import { useState } from "react";

function Input({set}){
const [input, setInput] = useState("")
const [count, setCount] = useState(1)
function handleInput(e){
    setInput(e.target.value)
}


function addTask (){
    
    if (input.trim() !== "") {
        set ({id: count, task: input, stat: false } )
        setCount(count+1)
    }
    setInput("")
    

}
    return (
        <div>
            <input type="text" placeholder = "Enter your task" value = {input} onChange={handleInput} onKeyDown={(e) => e.key === "Enter" ? addTask():null}/>
            <button onClick={addTask}>Add</button>  
        </div>
    )
}

export default Input;