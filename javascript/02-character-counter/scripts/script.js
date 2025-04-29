const textdisp = document.getElementById("textdisp");
const chrcnt = document.getElementById("chrcnt");
const warning = document.getElementById("warning");
const textarea = document.getElementById("textarea");
textarea.addEventListener ("input", function(){
    const y = textarea.value;
    if (y.length == 0) {
        textdisp.textContent =`Please Type`;
    } else {
        textdisp.textContent = `${y}`;
    }
  const leng = y.length;
  chrcnt.textContent = `Character Count is : ${leng}`;
  warning.textContent = `Character left is : ${100 - leng}`;
  if (leng > 90) {
    chrcnt.classList.add("warning");
    warning.classList.remove("display");
    warning.classList.add("warning");
  } else {
    chrcnt.classList.remove("warning");
    warning.classList.add("display");
  }
  }
    
)


