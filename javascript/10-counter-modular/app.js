import {increment, decrement, reset} from "./modules/counter.js";

import {updtdisp, incbtn, decbtn,rstbtn} from "./modules/dom.js";

let count = 0


incbtn.addEventListener("click", function(){          
  count = increment(count)
  updtdisp (count)

});


decbtn.addEventListener("click",() => {count = decrement(count)
     updtdisp (count)
    if (count < 0) {
        updtdisp ("Only Positive")
        count = 0
       
}
});

rstbtn.addEventListener("click",()=> {count = reset(count);
    updtdisp (count)
}
)


