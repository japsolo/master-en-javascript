/*
    clima => soleado
    día => viernes ó sábado
    horario => antes de las 6pm
*/

let clima = "soleado";
let dia = "sábado";
let horario = 2;

// AND - &&
console.log(clima === "soleado" && dia === "viernes" && horario < 6);

// OR - ||
console.log(dia === "viernes" || dia === "sábado");

// NOT - !
let estamosAprendiendo = true;
let esEspaniol = false;
console.log(!estamosAprendiendo);
console.log(!esEspaniol);
