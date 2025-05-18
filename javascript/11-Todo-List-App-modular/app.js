import {task, add_to_disp, } from './modules/dom.js'

const Todoarray = JSON.parse(localStorage.getItem("todolist")) || [];
let count = JSON.parse(localStorage.getItem("count")) || 0;

add_to_disp(Todoarray)

document.querySelector(".add").addEventListener("click", ()=> 
{   count = count + 1;
    Todoarray.push([task.value, 0, count]) 
add_to_disp(Todoarray)
localStorage.setItem("todolist", JSON.stringify(Todoarray))
localStorage.setItem("count",JSON.stringify(count))
task.value =``;
})


document.querySelector(".inpttask").addEventListener("keydown", (e)=> 
{   if (e.key === "Enter") {
    count = count + 1;
    Todoarray.push([task.value, 0, count]) 
add_to_disp(Todoarray)
localStorage.setItem("todolist", JSON.stringify(Todoarray))
localStorage.setItem("count",JSON.stringify(count))
task.value =``;
}
  
})