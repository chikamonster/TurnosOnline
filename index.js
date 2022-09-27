
function assign_turn() {
    globalThis = firstName = (document.getElementById("firstName").value);
    globalThis = surname = (document.getElementById("surname").value);
    globalThis = dni = (document.getElementById("dni").value);
    globalThis = date = (document.getElementById("date").value);
    return date, dni
}

function ask() {
    globalThis = dniBuscador = (document.getElementById("dniBuscador").value);
    if (dniBuscador === dni) {
        alert(`Tienes un turno registrado para el dia ${date}`)
    } else {
        alert(`No hemos encontrado un turno registrado correspondiente al DNI: ${dniBuscador}`)
    }
}

function newDiv(){
    const registro = document.getElementById("registro");
    registro.innerHTML = "<p>¡Muchas gracias por reservar un turno con nosotros!</p>";
    registro.className = "transitionRegistro";
}

function transition (){
    a = setTimeout(newDiv, 1500);
}

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
})

let botonEnviar = document.getElementById("botonEnviar");
botonEnviar.addEventListener("mouseup", assign_turn);
botonEnviar.addEventListener("mouseup", transition);



let botonConsultar = document.getElementById("botonConsultar");
botonConsultar.addEventListener("mouseup", ask);

