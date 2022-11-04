class Persona {
    #nombre; // atributo privado
    #apellido; // atributo privado
    #edad; // atributo privado
    #mascota; // atributo privado

    // Constructor
    constructor(nombre, apellido) {
        // Atributos
        this.#nombre = nombre;
        this.#apellido = apellido;
    }

    // Métodos
    getNombre() {
        return this.#nombre;
    }

    getApellido() {
        return this.#apellido;
    }

    getNombreCompleto() {
        return `${this.#nombre} ${this.#apellido}`;
    }

    getEdad() {
        return this.#edad;
    }

    getMascota() {
        return this.#mascota;
    }

    setEdad(edad) {
        this.#edad = edad;
    }

    setMascota(laMascota) {
        if (laMascota instanceof Mascota) {
            this.#mascota = laMascota;
            return;
        }
        console.log("ERROR: intentaste setear algo que no es una Mascota");
        console.log(`Estás en la persona ${this.getNombreCompleto()}`);
    }
}

class Mascota {
    #nombre; // atributo privado
    #tipo; // atributo privado

    constructor(nombre, tipo) {
        this.#nombre = nombre;
        this.#tipo = tipo;
    }

    getInformacion() {
        return `${this.#nombre} - ${this.#tipo}`;
    }
}

// Instancia = Creación de un objeto a partir de una classe (molde)
const jhonDoe = new Persona("Jhon", "Doe"); // Objeto
const marieSmithers = new Persona("Marie", "Smithers"); // Objeto
jhonDoe.setEdad(35);
marieSmithers.setEdad(27);

const puchi = new Mascota("Puchi", "Perro");

jhonDoe.setMascota("Una mascota falsa");
marieSmithers.setMascota(puchi);

console.log(jhonDoe.getNombreCompleto());
console.log(jhonDoe.getEdad());
console.log(marieSmithers.getNombreCompleto());
console.log(marieSmithers.getEdad());

const mascotaMarie = marieSmithers.getMascota();
console.log(mascotaMarie.getInformacion());
