<?php
// Procesar el formulario solo si el método de solicitud es POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Aquí recibimos los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];

    // Realizar el procesamiento, como guardar en la base de datos o enviar un correo

    // Redirigir al usuario a la página de agradecimiento
    header('Location: gracias.php');
    exit(); // Es importante agregar el exit() para evitar que se ejecute código adicional
} else {
    // Si no es un POST, redirigir a la página de inicio o mostrar un error
    header('Location: index.html');
    exit();
}
?>
