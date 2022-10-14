// LUXON

const DateTime = luxon.DateTime;
const fecha = DateTime.local(2022,3,12);
console.log(fecha.c);


// Llamdo de variables
let firstName = document.getElementById("firstName");
let surname = document.getElementById("surname");
let dni = document.getElementById("dni");
let date = document.getElementById("date");
let hour = document.getElementById("hour");

// Caracteres especiales --- Restriccion

document.querySelectorAll('input[type="number"]').forEach(input =>{
    input.oninput = () =>{
        if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength);
    };
})

// Formulario
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    persona = {
        "firstName": firstName.value,
        "surname": surname.value,
        "dni": dni.value,
        "date": date.value,
        "hour": hour.value
    }

    localStorage.setItem("paciente", JSON.stringify(persona));

});

let botonEnviar = document.getElementById("botonEnviar");
botonEnviar.addEventListener("mouseup", transition);


