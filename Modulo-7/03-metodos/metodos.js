const marieSmithers = {
    nombre: "Marie Smithers",
    edad: 27,
    email: "marie.s@email.com",
    estaCasada: false,
    ubicacion: {
        pais: "México",
        ciudad: "Ciudad de México",
    },
    mascotas: ["Lucas", "Paco"],
    obtenerNombreEdad: function () {
        return `${this.nombre} - ${this.edad}`;
    },
    saludar: function () {
        return "Hola ¿cómo estás?";
    },
    decirNombre: function () {
        return `Hola, mi nombre es ${this.nombre}`;
    },
    obtenerMascota: function (indice) {
        if (indice < this.mascotas.length) {
            return `${this.mascotas[indice]}`;
        }
        return `Error, no existen mascotas en ese índice, intenta con un número menor a ${this.mascotas.length}`;
    },
};

console.log(marieSmithers.obtenerMascota(-1));
console.log(marieSmithers.obtenerNombreEdad());
console.log(marieSmithers.saludar());
console.log(marieSmithers.decirNombre());
