const saludar = (nombre) => `Hola ${nombre}`;

const saludarEnEspaniol = (callback, nombre) => {
    return callback(nombre);
};

const resultado = saludarEnEspaniol(saludar, "Javi");
console.log(resultado);

const operacionMatematica = (operacion, valor1, valor2) => operacion(valor1, valor2);
const sumar = (n1, n2) => n1 + n2;
const restar = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 / n2;

const resultado1 = operacionMatematica(sumar, 45, 50);
console.log(resultado1);

const resultado2 = operacionMatematica(restar, 1876, 36);
console.log(resultado2);

const resultado3 = operacionMatematica(multiplicar, 327, 58);
console.log(resultado3);

const resultado4 = operacionMatematica(dividir, 14678, 32);
console.log(resultado4);
