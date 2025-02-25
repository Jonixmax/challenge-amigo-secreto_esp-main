// Lista para almacenar los nombres
let amiguis = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Validar que el nombre no esté repetido
    if (amiguis.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    // Agregar el nombre a la lista
    amiguis.push(nombre);
    input.value = ""; // Limpiar el campo de texto
    actualizarLista(); // Actualizar la lista en pantalla
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amiguis.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amiguis.length < 2) {
        alert("Agrega al menos 2 nombres para realizar el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amiguis.length);
    let nombreSorteado = amiguis[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${nombreSorteado}</strong> 🎉</li>`;
}
