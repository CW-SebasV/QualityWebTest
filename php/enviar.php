<?php

$nombre = $_POST['nombre'];
$empresa = $_POST['empresa'];
$ubicacion = $_POST['ubicacion'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

$servicios = "";
if(isset($_POST['servicios'])){
    $servicios = implode(", ", $_POST['servicios']);
}

$destino = "jsebasmora33d@hotmail.com";
$asunto = "Nuevo mensaje desde el formulario";

$contenido = "Nombre: $nombre\n";
$contenido .= "Empresa: $empresa\n";
$contenido .= "Ubicaión: $ubicacion\n";
$contenido .= "Correo: $correo\n";
$contenido .= "Teléfono: $telefono\n";
$contenido .= "Servicios de interés: $servicios\n\n";
$contenido .= "Mensaje:\n$mensaje";

$headers = "From: $correo";

mail($destino, $asunto, $contenido, $headers);

echo "Mensaje enviado correctamente";

?>