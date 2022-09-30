
let firstName = document.getElementById("firstName");
let surname = document.getElementById("surname");
let dni = document.getElementById("dni");
let date = document.getElementById("date");
let hour = document.getElementById("hour");

function ask() {
    globalThis = dniBuscador = (document.getElementById("dniBuscador").value);
    if (dniBuscador === dni) {
        alert(`Tienes un turno registrado para el dia ${date}`)
    } else {
        alert(`No hemos encontrado un turno registrado correspondiente al DNI: ${dniBuscador}`)
    }
}

function transition() {
    setTimeout(mensajeRegistro, 1000);
}

function mensajeRegistro() {
    const registro = document.getElementById("registro");
    registro.className = "transitionRegistro";
    registro.innerHTML = `<p>¡Muchas gracias por reservar un turno con nosotros!</p><br> <br><p style =" letter-spacing: 1px; font-size:20px; font-weight: 300; line-height:30px;"><b>Informacion del turno:</b><br>
    Nombre: ${surname.value} ${firstName.value}<br>
    DNI: ${dni.value} <br>
    Fecha: ${date.value}<br>
    Hora: ${hour.value}<br><br>`;
    let backButton = document.createElement("button");
    backButton.setAttribute("id","backButton")
    backButton.innerHTML = "<span>Volver<span>"
    registro.append(backButton);
    backButton.addEventListener("mouseup", ()=>{
        location.reload();
        return(false);
    })
    
}

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

})

let botonEnviar = document.getElementById("botonEnviar");
botonEnviar.addEventListener("mouseup", transition);

/* let botonConsultar = document.getElementById("botonConsultar");
botonConsultar.addEventListener("mouseup", ask); */

