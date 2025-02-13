let amigos = [];

const inputNombre = document.querySelector('#amigo');
const botonAgregar = document.querySelector('#agregar');
const listaAmigos = document.querySelector('#listaAmigos');

function agregarNombre() {
    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Capturar el valor del campo de entrada
    const nombre = inputNombre.value;

    if (nombre !== "") {
        // Agregar el nombre al arreglo de amigos
        amigos.push(nombre);

        // Iterar sobre el arreglo amigos
        amigos.forEach(function(amigo){
            // Crear un nuevo elemento li para cada amigo
            const nuevoAmigo = document.createElement('li');
            nuevoAmigo.textContent = amigo;
        
            // Agregar el nuevo elemento li a la lista de amigos
            listaAmigos.appendChild(nuevoAmigo);
        });

        // Limpiar el campo de texto
        inputNombre.value = "";
    } else {
        alert('Por favor, ingresa un nombre');
    }
}

function sortearAmigo() {
    if(amigos.length === 0){
        alert('No hay amigos disponibles para el sorteo');
        return;
    }
    
    //Logica del sorteo
    const indiceAletorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos [indiceAletorio];
    alert(`El amigo sorteado es: ${amigoSorteado}`);

    // Mostrar el Resultado7
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}
// Agregar un evento click al botón para que llame a la función agregarNombre
botonAgregar.addEventListener('click', agregarNombre);
