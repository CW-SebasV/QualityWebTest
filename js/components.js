// ===============================
// CARGAR COMPONENTES HTML
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const basePath = window.location.pathname.includes("/html/")
        ? "../"
        : "./";

    // HEADER
    fetch(basePath + "components/header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            // 🔥 AQUÍ CONFIGURAS LAS RUTAS DINÁMICAMENTE
            document.getElementById("link-inicio").href = basePath + "index.html";
            document.getElementById("logo-img").src = basePath + "images/Logo/logobn.png";

            document.getElementById("nav-inicio").href = basePath + "index.html";
            document.getElementById("nav-servicios").href = basePath + "html/services.html";
            document.getElementById("nav-sobre").href = basePath + "html/sobre-nosotros.html";
            document.getElementById("nav-contacto").href = basePath + "html/contact.html";
        });

    // FOOTER
    fetch(basePath + "components/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;

            // 🔥 RUTAS DINÁMICAS FOOTER

            // Logo
            document.getElementById("footer-logo").src = basePath + "images/Logo/logobn.png";

            // Navegación
            document.getElementById("footer-inicio").href = basePath + "index.html";
            document.getElementById("footer-servicios").href = basePath + "html/services.html";
            document.getElementById("footer-sobre").href = basePath + "html/sobre-nosotros.html";
            document.getElementById("footer-contacto").href = basePath + "html/contact.html";

            // Servicios (todos llevan a la misma página)
            document.getElementById("footer-serv-1").href = basePath + "html/services.html";
            document.getElementById("footer-serv-2").href = basePath + "html/services.html";
            document.getElementById("footer-serv-3").href = basePath + "html/services.html";
            document.getElementById("footer-serv-4").href = basePath + "html/services.html";

            // Correo
            document.getElementById("footer-correo").href = basePath + "html/contact.html";

            // Certificaciones
            document.getElementById("iso9001").src = basePath + "images/Logo/iso9001.png";
            document.getElementById("iso14001").src = basePath + "images/Logo/iso14001.png";
            document.getElementById("iso45001").src = basePath + "images/Logo/iso45001.png";
        });

});