document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío del formulario para hacer la validación

        // Obtener valores de los campos
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validar campos
        if (nombre === "" || email === "" || mensaje === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Por favor, introduce un correo electrónico válido.");
            return;
        }

        // Si todo está bien, mostrar un mensaje de confirmación
        alert("Formulario enviado correctamente.");
        
        // Aquí puedes agregar código para enviar el formulario si es necesario (e.g., AJAX)
        form.reset(); // Reiniciar el formulario después de enviarlo
    });

    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
