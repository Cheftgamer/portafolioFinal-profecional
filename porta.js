const panel = document.querySelector('.panel');
const oculPanel = document.querySelector('.ocul-panel');
const btn = document.getElementById("audio-control");
const flipCard = document.getElementById('flipCard');
const configCard = document.querySelector('.configCard');
const configCard2 = document.querySelector('.configCard2');
const configCard3 = document.querySelector('.configCard3');
const abrirM = document.getElementById('btn-can');
const cerrarM = document.getElementById('btn-ce');
const nombre = "Cheft_dev 💻💪🏻💵💰";
const prefijo = "@";

abrirM.addEventListener('click', (e)=>{
    panel.style.display = 'block'
    oculPanel.style.display = 'block'
})

cerrarM.addEventListener('click', (e)=>{
    panel.style.display = 'none'
    oculPanel.style.display = 'none'
})

function cambiarCancion(nuevaCancion){
    nuevaCancion.preventDefault;
    let audio = document.getElementById('audio');
    audio.src = nuevaCancion;
    audio.play();
}
window.onclick = (e)=>{
    let panel = document.querySelector('.panel');
    if(e.target == panel){
        panel.style = 'none'
    }
}

// Funcion de audio
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
