// Modos selectores
const bwhite = document.querySelector("#bwhite")
const body = document.querySelector("body")
const navbarLink = document.getElementsByClassName("navbar-link")
const botonMode = document.getElementById("boton-mode")
const contenedorInfoCv = document.getElementById("contenedor--info-cv")
const contenedorTextoCvEspecialidad = document.getElementById("contenedor--texto-cv__especialidad")
const contenedorTextoCvTitulo = document.getElementById("contenedorTextoCvTitulo")
const contenedorTextoCvTexto = document.getElementById("contenedor--texto-cv__texto")
const iconosRedes = document.getElementById("iconos--redes")

bwhite.addEventListener("click", e => {
    body.classList.toggle("whitemode")
    // Light Mode
    if (body.classList.contains("whitemode")) {
        for (let i = 0; i < navbarLink.length; i++) {
            navbarLink[i].style.color = "black";
        }
        botonMode.style.filter = "none"
        contenedorInfoCv.style.backgroundColor = "#0036802b"
        contenedorTextoCvEspecialidad.style.color = "black"
        contenedorTextoCvTitulo.style.color = "#000000"
        contenedorTextoCvTexto.style.color = "black"
        iconosRedes.style.filter = "none"
    }
    // Dark Mode
    else if (body.classList.contains("body-vacio")) {
        for (let i = 0; i < navbarLink.length; i++) {
            navbarLink[i].style.color = "rgb(139, 139, 139)";
        }
        botonMode.style.filter = "invert(94%) sepia(94%) saturate(0%) hue-rotate(153deg) brightness(105%) contrast(102%)"
        contenedorInfoCv.style.backgroundColor = "rgba(98, 0, 255, 0.041)"
        contenedorTextoCvEspecialidad.style.color = "#aaa"
        contenedorTextoCvTitulo.style.color = "white"
        contenedorTextoCvTexto.style.color = "#aaa"
        iconosRedes.style.filter = "invert(94%) sepia(94%) saturate(0%) hue-rotate(153deg) brightness(105%) contrast(102%)"
    }
})