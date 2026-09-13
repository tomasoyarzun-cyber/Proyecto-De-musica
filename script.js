const formulario = document.getElementById("formulario");
const login = document.getElementById("login");
const inicio = document.getElementById("inicio");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    login.style.display = "none";
    inicio.style.display = "grid";
});

const buscador = document.getElementById("buscador");
const cancionInput = document.getElementById("cancion");
const informacion = document.getElementById("informacion");
const play = document.getElementById("play");

buscador.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const cancionBuscada = cancionInput.value;
    console.log("Buscando canción:", cancionBuscada);

    if (!cancionBuscada.trim()) return;

    informacion.textContent = "";

    const titulo = document.createElement("h2");
    titulo.textContent = "Información de la canción:";

    const articulo = document.createElement("article");

    const pNombre = document.createElement("p");
    pNombre.textContent = "Nombre De la Canción: Let's Groove ";

    const pArtista = document.createElement("p");
    pArtista.textContent = "Artista: Earth, Wind & Fire";

    const pGenero = document.createElement("p");
    pGenero.textContent = "Genero:Funk/post-disco/pop/synth-funk";

    const pAnio = document.createElement("p");
    pAnio.textContent = "Año de Lanzamiento: 1981";

    articulo.append(pNombre, pArtista, pGenero, pAnio);
    informacion.append(titulo, articulo);

    play.src = "cancion/1.mp3";

    cancionInput.value = "";
});