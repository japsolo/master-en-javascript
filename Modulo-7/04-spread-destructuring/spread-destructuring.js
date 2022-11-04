const celularUno = {
    marca: "Samsung",
    modelo: "S22",
    precio: 345,
};

// Spread operator
const celularDos = { ...celularUno };

celularDos.precio = 578;
celularDos.modelo = "A55";
celularDos.colores = ["Rojo", "Negro"];

console.log(celularUno);
console.log(celularDos);

// Destructuring
// const modelo = celularDos.modelo;
// const price = celularDos.precio;
const { modelo, precio: price } = celularDos;
console.log(modelo);
console.log(price);

const mascotasJavi = ["Koen", "Jacko"];

const mascotasCaro = [...mascotasJavi];
mascotasCaro.push("Muñeca");

console.log(mascotasJavi);
console.log(mascotasCaro);

// const mascotaTres = mascotasCaro[2];
const [, , mascotaTres] = mascotasCaro;
console.log(mascotaTres);
