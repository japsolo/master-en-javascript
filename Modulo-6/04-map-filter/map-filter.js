const notas = [2.5, 4, 6.3, 8, 3.4];

const notasPor2 = notas.map((unaNota) => {
    return unaNota * 2;
});

console.log(notasPor2);

const estudiantes = ["Juana", "Marina", "Pablo", "Pedro", "Raul", "Carolina"];

const agregarApellido = (unEstudiante) => {
    return `${unEstudiante} Doe`;
};

const estudiantesConApellido = estudiantes.map(agregarApellido);
console.log(estudiantes);
console.log(estudiantesConApellido);

const notasSemestre = [5, 7, 3, 2, 1, 8, 10, 7];
const notasAprobadas = notasSemestre.filter((unaNota) => {
    return unaNota > 6;
});
console.log(notasAprobadas);

const nombres = ["María", "Pedro", "Carolina", "Walter", "Rocío", "Diego"];
const nombresLargos = nombres.filter((unNombre) => unNombre.length >= 10);
console.log(nombresLargos);
console.log(nombresLargos.length);
