

var button= document.querySelector("button");

button.addEventListener("click", () => {
document.body.classList.toggle('dark');

//toggle hace que si no tiene una clase llamada dark, se la crea.. entonces cuando apreto, pone a body la clase dark al apretar, o quita ese nombre al volver
//a apretar


button.classList.toggle('active');  //activamos la clase active


});
