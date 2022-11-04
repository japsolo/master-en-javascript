const sumar = (n1, n2, ...params) => {
    console.log(params);
    return n1 + n2;
};

console.log(sumar(34, 67, 5, 4, 3, 2));

const datosPersonales = (nombre, documento, ...datos) => {
    console.log(datos);
    return `Nombre: ${nombre} / Documento: ${documento}`;
};

console.log(datosPersonales("Pedro", "ABC123", 32, "Argentina", 1.65));
