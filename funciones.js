// Función para redireccionar a una página HTML distinta en dispositivos móviles
var valid = true;
function redirectOnMobile() {
    // Comprueba si el ancho de la ventana es menor que 600 píxeles (puedes ajustar este valor según tus necesidades)
    if (window.innerWidth < 600 && valid) {
      window.location.href = 'mobile.html'; // Redirecciona a mobile.html
    }
  }
  
  // Llama a la función de redireccionamiento al cargar la página
  window.onload = redirectOnMobile;
  valid = false;
  

  

function descargarPDF() {
    var enlace = document.createElement('a');
    enlace.href = 'CV.pdf';
    enlace.download = 'CV.pdf';
    enlace.target = '_blank';
    enlace.click();
  }

  (function () {
    emailjs.init('a5xFr6KpHNMp9Blgx-ZQY'); // User ID de EmailJS

    document.getElementById('formulario-contacto').addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Obtén los valores del formulario
        var nombre = document.getElementById('nombre').value;
        var telefono = document.getElementById('telefono').value;
        var correo = document.getElementById('correo').value;
        var asunto = document.getElementById('asunto').value;
        var mensaje = document.getElementById('mensaje').value;

        // Configuración de los parámetros del correo electrónico
        var params = {
            nombre: nombre,
            telefono: telefono,
            correo: correo,
            asunto: asunto,
            mensaje: mensaje
        };

        // Envía el correo electrónico
        emailjs.send('service_pi6vbq9', '', params)
            .then(function (response) {
                console.log('Correo enviado', response.status, response.text);
                document.getElementById('mensaje-validacion').textContent = 'El correo se ha enviado correctamente.';
                document.getElementById('mensaje-validacion').style.color = 'green';
                document.getElementById('formulario-contacto').reset();
            }, function (error) {
                console.error('Hubo un error al enviar el correo', error);
                document.getElementById('mensaje-validacion').textContent = 'Hubo un error al enviar el correo.';
                document.getElementById('mensaje-validacion').style.color = 'red';
            });
    });
})();