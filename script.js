const formulario = document.getElementById("formulario");
const login = document.getElementById("login");
const inicio = document.getElementById("inicio");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    login.style.display = "none";
    inicio.style.display = "grid";
});

