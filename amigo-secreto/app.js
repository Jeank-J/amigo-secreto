let names = [];

let entrada = document.getElementById('amigo');

function limpiarEntrada (){
    entrada = "";
    return;
}
function actualizar() {
    names.length = 0;
    limpiarEntrada();
}

function sortearAmigo(){
    let n = names.length;
    let numeroAleatorio = Math.floor(Math.random()*n) + 1;
    return names[numeroAleatorio];
}

function agregarAmigo(){
    if (entrada != ""){
        names.push(entrada.value);
        limpiarEntrada();
    }
    return;
}

console.log("hola");