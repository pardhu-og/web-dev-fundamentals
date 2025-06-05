//useToggle.js

import { useState } from "react";

export default function useToggle(initialValue){
const [stat, setStat] = useState(initialValue)

function toggle (){
    setStat(p=> !p)
}

return {stat, toggle}
}