const mascotas = ["Koen", "Muñeca", "Azabache", "Ringo", "Jacko"];

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

for (let i = 0; i < meses.length; i++) {
    const mes = meses[i];
    console.log(`El mes: ${mes} está en el índice ${i}`);
}

for (let mes of meses) {
    console.log(`El mes: ${mes}`);
}

for (let mascota of mascotas) {
    console.log(`Tengo una mascota que se llama ${mascota}`);
}
