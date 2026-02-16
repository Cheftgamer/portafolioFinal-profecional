const panel = document.querySelector('.panel');
const oculPanel = document.querySelector('.ocul-panel');
const ReproductorAuto = document.getElementById('audio');
const listaCanciones = ["Gamines.mp3", "Salsa Rap.mp3", "R.D.L.F..mp3", "NX ESTXS.mp3", "Chica Irreal.mp3", "Farandula.mp3", "Respeto.mp3", "Jerigonza.mp3", "ILUSTRE CAMARADA.mp3", "Criterio.mp3", "La movie.mp3", "MILO J.mp3", "Micro.mp3", "LA SANTA.mp3", "Déjate Querer.mp3", "BD NUEVAYOL.mp3", "Esclava.mp3", "Sigues Con Él feat.mp3", "Pa Que La Pases Bien.mp3", "Me Prefieres A Mi.mp3", "Hace Mucho Tiempo.mp3", "La Jumpa.mp3", "BAILE INoLVIDABLE.mp3", "Tu No Metes Cabra (Remix).mp3", "Si Veo a Tu Mamá.mp3", "💕🧃 YOGURCITO.mp3", "Cuando No Era Cantante.mp3"];
const TituCancion = document.getElementById('cancion')
let inceActual = 0;
const btn = document.getElementById("audio-control");
const btnModo = document.getElementById("modo-reproduccion");
let modoActual = "orden";
const flipCard = document.getElementById('flipCard');
const configCard = document.querySelector('.configCard');
const configCard2 = document.querySelector('.configCard2');
const configCard3 = document.querySelector('.configCard3');
const abrirM = document.getElementById('btn-can');
const cerrarM = document.getElementById('btn-ce');
const nombre = "Cheft_dev 💻💪🏻💵💰";
const prefijo = "@";

const audio = document.getElementById('miReproductor');
const barra = document.getElementById('barraProgreso');
const txtActual = document.getElementById('tiempoActual');
const txtRestante = document.getElementById('tiempoRestante');

function Cancion(nombreArchivo){
    let nombreLimpio = nombreArchivo.replace('.mp3', '').replace(/-/g, ' ').replace(/%20/g, ' ');
    TituCancion.innerText = nombreLimpio;
}

btnModo.addEventListener('click', () => {
    if (modoActual === "orden") {
        modoActual = "aleatorio";
        btnModo.innerHTML = "🔀";
    } else if (modoActual === "aleatorio") {
        modoActual = "bucle";
        btnModo.innerHTML = "🔂";
    } else {
        modoActual = "orden";
        btnModo.innerHTML = "🔁";
    }
});

function formatearTiempo(segundos) {
    if (isNaN(segundos)) return "0:00";
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min}:${seg < 10 ? '0' : ''}${seg}`;
}

ReproductorAuto.addEventListener('ended', () => {
    if (modoActual === "bucle") {
        ReproductorAuto.currentTime = 0;
        ReproductorAuto.play();
    } 
    else if (modoActual === "aleatorio") {
        let nuevoIndice;
        do {
            nuevoIndice = Math.floor(Math.random() * listaCanciones.length);
        } while (nuevoIndice === inceActual && listaCanciones.length > 1);
        
        inceActual = nuevoIndice;
        ReproductorAuto.src = listaCanciones[inceActual];
        ReproductorAuto.play();
    } 
    else {
        inceActual++;
        if (inceActual >= listaCanciones.length) {
            inceActual = 0;
        }
        ReproductorAuto.src = listaCanciones[inceActual];
        ReproductorAuto.play();
    }
    
    Cancion(listaCanciones[inceActual]);
    console.log(`Modo: ${modoActual} | Sonando: ${listaCanciones[inceActual]}`);
});

// ReproductorAuto.addEventListener('ended', () => {
//     inceActual++;

//     if (inceActual >= listaCanciones.length) {
//         inceActual = 0;
//     }

//     ReproductorAuto.src = carpeta + listaCanciones[inceActual];
//     ReproductorAuto.play();
//     console.log("Reproduciendo ahora: " + listaCanciones[inceActual]);
// });

ReproductorAuto.addEventListener('timeupdate', () => {
     const porcentaje = (ReproductorAuto.currentTime / ReproductorAuto.duration) * 100;
    barra.value = porcentaje || 0;
    txtActual.innerText = formatearTiempo(ReproductorAuto.currentTime);
    const restante = ReproductorAuto.duration - ReproductorAuto.currentTime;
    txtRestante.innerText = "-" + formatearTiempo(restante);
});

barra.addEventListener('input', () => {
    const nuevoTiempo = (barra.value / 100) * ReproductorAuto.duration;
    ReproductorAuto.currentTime = nuevoTiempo;
});

abrirM.addEventListener('click', (e)=>{
    panel.style.display = 'block'
    oculPanel.style.display = 'block'
})

cerrarM.addEventListener('click', (e)=>{
    panel.style.display = 'none'
    oculPanel.style.display = 'none'
})

function cambiarCancion(nuevaCancion) {
    const nombreArchivo = nuevaCancion.split('/').pop();
    const nuevoIndice = listaCanciones.indexOf(nombreArchivo);
    
    if (nuevoIndice !== -1) {
        inceActual = nuevoIndice;
    }

    ReproductorAuto.src = nuevaCancion;
    ReproductorAuto.play();
    btn.innerHTML = "🔊";
    Cancion(nuevaCancion);
}
Cancion(listaCanciones[inceActual]);

// Antiguo sistema de audio
// function cambiarCancion(nuevaCancion){
//     nuevaCancion.preventDefault;
//     let audio = document.getElementById('audio');
//     audio.src = nuevaCancion;
//     audio.play();
// }

window.onclick = (e)=>{
    let panel = document.querySelector('.panel');
    if(e.target == panel){
        panel.style = 'none'
    }
}

btn.addEventListener('click', (e)=>{
    let audio = document.getElementById("audio");

    if (audio.paused){
        audio.play();
        btn.innerHTML = "🔊";
    }else{
        audio.pause();
        btn.innerHTML = "▶️";
    }
})

let i = 0;
function animarTitulo() {
    document.title = prefijo + " " + nombre.substring(0, i);

    if (i < nombre.length) {
        i++;
        setTimeout(animarTitulo, 300);
    } else {
        setTimeout(() => {
            i = 0;
            animarTitulo();
        }, 2000);
    }
}

animarTitulo();

let f12 = 0;
document.addEventListener('keydown', (e)=>{
    if (e.key === 'f12'){
        e.preventDefault();
        f12++;
        if (f12 === 100000000000000){
            alert("Lo lamento esta tecla esta bloqueada")
        }else if(f12 > 1000000000000000){
            alert("¡Deja de intentarlo esta bloqueado!")
        }
    }
    console.log(`Intentaron usar el f12 estas veces ${f12}`)
});

let ctrl = 0;
document.addEventListener('keydown', (e)=>{
    if (e.key === 'ctrl'){
        e.preventDefault();
        ctrl++;
        if (ctrl === 100000000000000){
            alert("Lo lamento esta tecla esta bloqueada")
        }else if(ctrl > 1000000000000000){
            alert("¡Deja de intentarlo esta bloqueado!")
        }
    }
    console.log(`Intentaron usar el ctrl estas veces ${ctrl}`)
});

flipCard.addEventListener("click", (e)=>{
    flipCard.classList.toggle("flipped");
});
configCard.addEventListener("click", (e)=>{
    configCard.classList.toggle("flipped");
});
configCard2.addEventListener("click", (e)=>{
    configCard2.classList.toggle("flipped");
});
configCard3.addEventListener("click", (e)=>{
    configCard3.classList.toggle("flipped");
});
