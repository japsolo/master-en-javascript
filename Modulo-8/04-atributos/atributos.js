class Persona {
    #nombre; // atributo privado
    #apellido; // atributo privado
    #edad; // atributo privado

    // Constructor
    constructor(nombre, apellido, edad) {
        // Atributos
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#edad = edad;
    }
    // Métodos
}

class Mascota {
    #nombre; // atributo privado
    #tipo; // atributo privado

    constructor(nombre, tipo) {
        this.#nombre = nombre;
        this.#tipo = tipo;
    }
}

// Instancia = Creación de un objeto a partir de una classe (molde)
const jhonDoe = new Persona("Jhon"); // Objeto
const marieSmithers = new Persona("Marie"); // Objeto

const puchi = new Mascota("Puchi", "Perro");

console.log(jhonDoe);
console.log(marieSmithers);
console.log(puchi);
