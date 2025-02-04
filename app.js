const leftbtn = document.getElementById("left");
const rightbtn = document.getElementById("right");

const frutas = document.querySelector(".frutas");
const titulo = document.querySelector(".title");
const textos = ["Pera", "Manzana", "Exotico"];
let posicion = 0;

function actualizar() {
    document.body.className = "p" + posicion;

    frutas.classList.remove("frutas");
    void frutas.offsetWidth;
    frutas.classList.add("frutas");

    titulo.classList.remove("title");
    void titulo.offsetWidth;
    titulo.classList.add("title");

    titulo.innerText = textos[posicion];
    document.body.style.setProperty("--position",posicion);
}

function siguiente() {
    if (posicion < 2) posicion++;
    actualizar()        
}
function anterior() {
    if (posicion > 0) posicion--;
    actualizar();
}

leftbtn.onclick = anterior;
rightbtn.onclick = siguiente;