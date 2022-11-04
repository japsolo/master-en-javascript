class Persona {
    // Constructor
    constructor(prueba) {
        console.log("Se ejecutó el método constructor de la clase Persona");
        console.log(prueba);
    }
    // Atributos
    // Métodos
}

class Mascota {
    constructor() {
        console.log("Método constructor de la mascota");
    }
}

// Instancia = Creación de un objeto a partir de una classe (molde)
const jhonDoe = new Persona("Un texto de prueba"); // Objeto
console.log(jhonDoe);

const puchi = new Mascota();
console.log(puchi);
