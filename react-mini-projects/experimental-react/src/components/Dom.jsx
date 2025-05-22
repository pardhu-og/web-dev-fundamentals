//DOMs.jsx
import { useState } from "react"

export function ProfileCard(props){
 const [visible, setVisibility] = useState(false);

  return (
    <div style={{backgroundColor:`${props.color}`, border: `2px solid black` , margin: "5px", padding: "5px"}}>
      <h3>Name: {props.name}</h3>
      <p>Role: {props.role}</p>
      <button onClick={() => setVisibility (!visible)}>{visible?"Hide Info":"More Info"}</button>
      {visible && props.children}
  
  </div>
  )
}

export function Individual (props){
 return <p>Description: {props.description}</p>
}


