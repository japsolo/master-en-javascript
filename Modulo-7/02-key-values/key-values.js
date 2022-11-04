const marieSmithers = {
    nombre: "Marie Smithers",
    edad: 27,
    email: "marie.s@email.com",
    estaCasada: false,
    ubicacion: {
        pais: "México",
        ciudad: "Ciudad de México",
    },
};

console.log(marieSmithers.nombre);
console.log(marieSmithers.edad);
console.log(marieSmithers["email"]);
console.log(marieSmithers.ubicacion.pais);
console.log(marieSmithers.ubicacion.ciudad);
console.log(marieSmithers.mascotas);

const jhonDoe = {
    email: "john.doe@email.com",
    edad: 32,
    ubicacion: {
        ciudad: "Bogotá",
        pais: "Colombia",
    },
    nombre: "John Doe",
    mascotas: ["Puchi", "Michi"],
};

console.log(jhonDoe.mascotas[0]);
console.log(jhonDoe.mascotas[1]);
