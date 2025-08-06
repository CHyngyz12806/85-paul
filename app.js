let input = document.getElementById("input")
let btn = document.getElementById("btn")
let h1 = document.getElementById("h1")

btn.onclick = function name(){
     let message = input.value.trim();

     if (message) {
      h1.innerHTML = 'салам ' + message
      h1.style.color = "green"
     } else {
      h1.innerHTML = "сураныч, атынызды жазыныс!"
      h1.style.color = "red"
     }
   }