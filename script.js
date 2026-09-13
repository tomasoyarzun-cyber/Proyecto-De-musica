const formulario = document.getElementById("formulario");
const login = document.getElementById("login");
const inicio = document.getElementById("inicio");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    login.style.display = "none";
    inicio.style.display = "block";

});

const buscador= document.getElementById("buscador");
buscador.addEventListener("submit", function(event){
    event.preventDefault();
    const cancionBuscada = document.getElementById("cancion").value;
    console.log("Buscando canción:", cancionBuscada);

});