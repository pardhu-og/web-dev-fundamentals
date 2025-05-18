import {arraysplice} from "./todo.js"

export const task = document.querySelector(".inpttask");

export const add_to_disp = (x) => {
    const list = document.querySelector(".list")
    list.innerHTML = ``
    x.forEach(function(y){
        const newElement = document.createElement("li")
        if (y[1]===1) {
            newElement.innerHTML =`<span style = "text-decoration: line-through" id = "task${y[2]}">${y[0]}</span> <button id = "donebtn${y[2]}">✔</button>  <button id = "delbtn${y[2]}">X</button>` 
        } else {
            newElement.innerHTML =`<span id = "task${y[2]}">${y[0]}</span> <button id = "donebtn${y[2]}">✔</button>  <button id = "delbtn${y[2]}">X</button>`
        }
            
        list.appendChild(newElement)
        
        
console.log(x)
    
         document.querySelector(`#donebtn${y[2]}`).addEventListener("click", function(){

            if (x[x.indexOf(y)][1] === 1) {
                x[x.indexOf(y)][1] = 0
                
            } else{x[x.indexOf(y)][1] = 1}

          
          
    localStorage.setItem("todolist", JSON.stringify(x))
    add_to_disp(JSON.parse(localStorage.getItem("todolist")))      
})

    document.querySelector(`#delbtn${y[2]}`).addEventListener("click", function(){
          
          arraysplice(x, x.indexOf(y))
          
    localStorage.setItem("todolist", JSON.stringify(x))
    add_to_disp(JSON.parse(localStorage.getItem("todolist")))      
})



    })

   

}

