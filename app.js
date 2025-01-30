// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    if (!nombre || amigos.includes(nombre)) return alert("Nombre inválido o ya agregado.");
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos.map((amigo, i) => `<li>${amigo} <button onclick="eliminarAmigo(${i})">X</button></li>`).join('');
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) return alert("Se necesitan al menos dos amigos.");
    let disponibles = [...amigos];
    let resultado = amigos.map(amigo => {
        let posibles = disponibles.filter(a => a !== amigo);
        if (!posibles.length) return sortearAmigo();
        let elegido = posibles.splice(Math.floor(Math.random() * posibles.length), 1)[0];
        return `${amigo} → ${elegido}`;
    });
    document.getElementById("resultado").innerHTML = resultado.map(r => `<li>${r}</li>`).join('');
}