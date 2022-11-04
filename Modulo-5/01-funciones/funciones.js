// 1. Crear la función - Declaración
function saludar() {
    return "¡Hola qué tal!";
}

// 2. Ejecutar la función (llamar / invocar)
const mensajeDeSaludo = saludar();
console.log(mensajeDeSaludo);

function saludarVersion2(nombreDeLaPersona) {
    let mensaje;
    if (nombreDeLaPersona === undefined) {
        mensaje = `Hola persona desconocida`;
    } else {
        mensaje = `Hola ${nombreDeLaPersona}`;
    }
    return mensaje;
}

const saludoUno = saludarVersion2("Javiscript");
console.log(saludoUno);

const saludoDos = saludarVersion2();
console.log(saludoDos);
