import Input  from "./components/input"
import List from "./components/List"
import { useState } from "react";


function App() {
 
const [data,addData] = useState([]);
function update(x){
  addData(prev =>[...prev, x])
}

function delFunc(x){
  const filtered = data.filter(p => p.id !== x);
  addData(filtered);
}

function donFunc(x){
 let q =  data.map(p => p.id === x ? {"id": p.id, "stat": !p.stat, "task":p.task}: p )
  addData([...q])
}

 return (
  <div>
    <div>
      <Input set = {update}/>
    </div>
    <div>
      <List tasks = {data} delFunc = {delFunc} donFunc={donFunc}/> 
    </div>
  </div>
 )
 

}


export default App;
