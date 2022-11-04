const notasDelSemestre = [8, 9, 3, 5, 7, 10, 2, 4.5];

const totalDeNotas = notasDelSemestre.reduce((acum, nota) => acum + nota);

const promedioSemestre = Math.round(totalDeNotas / notasDelSemestre.length);

console.log(promedioSemestre);

const mascostas = ["Koen", "Azabache", "Jacko"];

const callbackParaElReduce = (acum, mascota) => `${acum} ${mascota},`;
const todasLasMascostasJuntas = mascostas.reduce(callbackParaElReduce, "Mis mascostas se llaman:");
console.log(todasLasMascostasJuntas);
