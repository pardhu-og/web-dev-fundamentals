let count = 0;
        const countdisplay = document.getElementById("countdisplay");
        const incbtn = document.getElementById("incbtn");
        incbtn.addEventListener("click",function() {
            count = count + 1;
            console.log(count);
            countdisplay.textContent = `Counter: ${count}`
        })
        const decbtn = document.getElementById("decbtn");
        decbtn.addEventListener("click",function() {
            count = count - 1;
            console.log(count);
            countdisplay.textContent = `Counter: ${count}`
        })
        const resetbtn = document.getElementById("resetbtn");
        resetbtn.addEventListener("click",function() {
            count = 0;
            console.log(count);
            countdisplay.textContent = `Counter: ${count}`
        })
        const body = document.getElementById("body")
        const togbtn = document.getElementById("toggle");
        togbtn.addEventListener("click", function() {
                body.classList.toggle("highlight");
        })