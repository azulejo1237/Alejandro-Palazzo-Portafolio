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
const backgroundTecnologia = document.getElementById("background--tecnologia")
const tecnologiasTitulo = document.getElementById("tecnologias--titulo")
const proyectosTitulo = document.getElementById("proyectos--titulo")
const proyectoContenido = document.getElementsByClassName("proyecto--contenido")

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
        backgroundTecnologia.style.backgroundColor = "rgba(0, 54, 128, 0.17)"
        tecnologiasTitulo.style.color = "black"
        proyectosTitulo.style.color = "black"
        for (let i = 0; i < proyectoContenido.length; i++) {
            proyectoContenido[i].style.border = "2px solid rgb(98, 0, 255, 0.50)";
        }
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
        backgroundTecnologia.style.backgroundColor = "rgb(98, 0, 255)"
        tecnologiasTitulo.style.color = "white"
        proyectosTitulo.style.color = "white"
        for (let i = 0; i < proyectoContenido.length; i++) {
            proyectoContenido[i].style.border = "2px solid white";
        }
    }
})

