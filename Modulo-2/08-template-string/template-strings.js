let nombre = "María";
let apellido = "Pérez";
let nombreCompleto = nombre + " " + apellido;
let edad = 23;
let intereses = "Javascript, HTML y CSS";
console.log(nombreCompleto);

// let saludo = "Hola mi nombre es " + nombreCompleto + ", tengo " + edad + " años y me gusta " + intereses;
let saludo = `Hola mi nombre es ${nombreCompleto}, tengo ${Math.random()} años y me gusta ${intereses}`;
console.log(saludo);
