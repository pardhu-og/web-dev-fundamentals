 //event listning and data forming and local storing of data

 const btn = document.querySelector("#btn");
 const noteslist = (JSON.parse(localStorage.getItem("data")) || [])
  
  render()
const note = btn.addEventListener("click",function() {
  const textdisp = document.querySelector("#notes").value;
  if (textdisp.trim() != "") {
      noteslist.push(textdisp)
  
  document.querySelector("#notes").value = ""
  localStorage.setItem("data", JSON.stringify(noteslist));
  render()
  }
})

 

// display of data along with del button and linking that button to changing the array 
let dltbtn = function (x) {
          noteslist.splice(x,1)
          localStorage.setItem("data", JSON.stringify(noteslist));
          render ()
      }
function render () {
  const display = document.querySelector(".textdisp")
  display.textContent = ``
  noteslist.forEach(function(p, index) {
      const newnote = document.createElement("p");
      
      newnote.innerHTML = `<p class = "lines">${p} <button class = "dltbtn" onclick= "dltbtn (${index})">x</button></p>` ;
      display.appendChild(newnote);
     
      })
}
