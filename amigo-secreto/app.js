let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');

function sortearAmigo(){        
    let n = amigos.length;
    if (n == 0){
        alert('No hay amigos listados')
        return;
    }
    let numeroAleatorio = Math.floor(Math.random() * n);    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = amigos[numeroAleatorio];
    return;
}

function agregarAmigo(){
    let entrada = document.getElementById('amigo');
    let nombre = entrada.value;
    nombre = nombre.trim();
    if (nombre !== ""){
        amigos.push(nombre);
        entrada.value = '';
        actualizarListaAmigos();
    }else{
        alert("Por favor, inserte un nombre.");
    }
    return;
}

function actualizarListaAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    let n = amigos.length;
    for (let i = 0; i < n; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}
