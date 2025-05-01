const tasks =[];
        const add = document.querySelector(".btn--add");
        const inputtxt = document.querySelector(".input__input");
        const list = document.querySelector(".card__list");
        const war = document.querySelector(".warning")
        war.classList.add("display")
        let i = 0;
        add.addEventListener("click", function(){
                if (inputtxt.value.trim() != "") {
                    tasks.push (inputtxt.value)
                    const newtask = document.createElement("li");
                    newtask.innerHTML =`<span class="ts${i}"><span class= "task${i}">${inputtxt.value}</span> <button class="btn${i}--done">Done</button> <button class="btn${i}--del">Del</button></span> `
                    list.appendChild(newtask)
                    dynamic (i);
                    inputtxt.value = ""
                    i = i + 1;
                    war.classList.add("display")
                    war.classList.remove("nodisplay")
                } else {
                    war.classList.remove ("display")
                    war.classList.add ("nodisplay")
                }
            
              
        })
        
        function dynamic (i) {
            
            let b = document.querySelector(`.btn${i}--done`)
            let a = document.querySelector(`.task${i}`) 
            b.addEventListener("click", function(){
                a.classList.toggle("strike")
            })

            let z = document.querySelector(`.btn${i}--del`)
            let p = document.querySelector(`.ts${i}`)
            z.addEventListener("click", function(){
                tasks.splice(i,1);
            p.classList.add("display")

            })
            
        } 
