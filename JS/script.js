const nombreobj = document.querySelector('#nombre');
let nombreForm = '';

const emailobj = document.querySelector('#email');
let emailform = '';

const tarjetaobj = document.querySelector('#tarjeta');
let tarjetaForm = '';

const fechaobj = document.querySelector('#fecha');
let fechaForm = '';

const comentarioobj = document.querySelector('#comentarios'); // Cambiado correctamente
let comentarioForm = '';

const mensajeEstado = document.querySelector('#mensajeEstado');

// Eventos para capturar los datos mientras se ingresan
nombreobj.addEventListener('input', function(evento) {
    nombreForm = evento.target.value;
});

emailobj.addEventListener('input', function(evento) {
    emailform = evento.target.value;
});

tarjetaobj.addEventListener('input', function(evento) {
    tarjetaForm = evento.target.value;
});

fechaobj.addEventListener('input', function(evento) {
    fechaForm = evento.target.value;
});

comentarioobj.addEventListener('input', function(evento) {
    comentarioForm = evento.target.value;
});

// Evento al hacer clic en el botón de enviar
const btnEnviar = document.querySelector('#botonEnviar');
btnEnviar.addEventListener('click', function(evento) {
    evento.preventDefault();
    mensajeEstado.innerHTML = '';  

    // Validación de los campos
    if (nombreForm === '') {
        mensajeEstado.textContent = 'Falta el nombre';
        mensajeEstado.style.color = 'red';
    } else if (emailform === '') {
        mensajeEstado.textContent = 'No hay correo';
        mensajeEstado.style.color = 'red';
    } else if (!validarEmail(emailform)) {
        mensajeEstado.textContent = 'Correo inválido. Verifica el formato';
        mensajeEstado.style.color = 'red';
    } else if (tarjetaForm === '') {
        mensajeEstado.textContent = 'Falta el número de tarjeta';
        mensajeEstado.style.color = 'red';
    } else if (fechaForm === '') {
        mensajeEstado.textContent = 'Falta la fecha de caducidad';
        mensajeEstado.style.color = 'red';
    } else if (comentarioForm === '') {
        mensajeEstado.textContent = 'Falta un comentario';
        mensajeEstado.style.color = 'red'; 
    } else {
        mensajeEstado.textContent = 'Sus datos se enviaron correctamente';
        mensajeEstado.style.color = 'green';
    }
});

// Función para validar el formato del correo electrónico
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}



