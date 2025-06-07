//Button.jsx
import { useContext } from "react";
import { Themecontext } from "../contexts/Themecontext";
export default function Btn (){
    const {btnStat,setBtnstatus} = useContext(Themecontext)
    function handleClick(){
        setBtnstatus(p=> p==="light"? "dark":"light")
    }
    return (
        <>
        <button onClick={handleClick}className={`absolute right-5 top-5 text-xl rounded-full px-4 py-2 hover:cursor-pointer hover:bg-gray-700 transition-all ${btnStat==="light"?"bg-gray-500":"bg-black"}`}>{btnStat==="light"?"🌙":"☀️"}</button>
        
        </>
    )
}
