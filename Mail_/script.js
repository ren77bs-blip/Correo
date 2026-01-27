const e1 = document.getElementById("escena1");
const e2 = document.getElementById("escena2");
const e3 = document.getElementById("escena3");
const e5 = document.getElementById("escena5");
const gifResultado = document.getElementById("gifResultado");

// gifs tristes
const gifsTristes = [
  "perrotriste2.jpg",
  "perro_triste.gif",
  "osopolar_triste.gif"
];

// gifs felices
const gifsFelices = [
  "jake_feliz.gif",
  "bola_amarilla_sonrrojada.gif",
  "BobFeliz.gif"
];

// ---- Inicio ----
// ---- CONTRASEÑA DE ACCESO ----
const passwordCorrecta = "Garbanzos"; // ← cambia esta clave por la que tú quieras

window.onload = () => {
    const clave = prompt("Tienes correo, ingresa la contraseña para leer el mensaje");

    if (clave !== passwordCorrecta) {
        document.body.innerHTML = "<h2 style='color:white; text-align:center; margin-top:50px;'>❌ Contraseña incorrecta</h2>";
        return;
    }

    // Si la contraseña es correcta, continúa normal:
    setTimeout(() => {
        e1.classList.add("hidden");
        e2.classList.remove("hidden");
    }, 3000);
};

function abrirCarta() {
    e2.classList.add("hidden");
    e3.classList.remove("hidden");
}

// Reproduce secuencia de gifs
function reproducirSecuencia(lista) {
    let i = 0;
    e5.classList.remove("hidden");
    gifResultado.src = lista[i];
    i++;

    const intervalo = setInterval(() => {
        if (i >= lista.length) {
            clearInterval(intervalo);
        } else {
            gifResultado.src = lista[i];
            i++;
        }
    }, 2000);
}

// Resultado de botones
function resultado(opcion) {
    e3.classList.add("hidden");

    if (opcion === "rechazar") {
        reproducirSecuencia(gifsTristes);
    } 
    else {
        reproducirSecuencia(gifsFelices);
    }
}
