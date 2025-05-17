
export const incbtn = document.querySelector(".inc");
export  const decbtn = document.querySelector(".dec");
export  const rstbtn = document.querySelector(".rst");

export function updtdisp (x){
    const disp = document.querySelector("#counter")
    disp.textContent = `${x}`
    
} 

