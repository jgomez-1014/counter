//Inicar el contador
let count = 0;

//Seleccionar el Valor y los botones
const valor = document.querySelector("#valor");
const botones = document.querySelectorAll(".btn");

botones.forEach(function(btn) {
    //console.log(btn);
    btn.addEventListener("click", (x)=> {
        //console.log(x.currentTarget.classList);
        const clase = x.currentTarget.classList;
        if (clase.contains("decrease")) {
            count--;
        } else if (clase.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

       

        if (count > 0) {
            valor.style.color = "green";
          }
          if (count < 0) {
            valor.style.color = "red";
          }
          if (count === 0) {
            valor.style.color = "#222";
          }

        //console.log(count);
        valor.textContent = count;
    })
});

