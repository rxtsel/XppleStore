// ENVIAR MENSAJE A WPP

let iPhone = document.querySelector('#iPhone');
let color = document.querySelector('#color');
let gb = document.querySelector('#gb');
let enviarBtn = document.querySelector('#enviar-btn');


enviarBtn.addEventListener('click', enviarMensaje);


function enviarMensaje() {
    let iPhone = document.querySelector('#iPhone').value
    let color = document.querySelector('#color').value
    let gb = document.querySelector('#gb').value
    let url = `https://api.whatsapp.com/send?phone=573142216604&text=Hola, ¿cómo estás?, estoy interesado en un dispositivo ${iPhone} de color ${color} con un almacenamiento de ${gb}. ¿Lo tendrás disponible?. Gracias.`
    window.open(url);
}