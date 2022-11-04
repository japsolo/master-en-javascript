let i = 123;

while (i < 10) {
    let resultado = 12 * i;
    if (resultado === 48) {
        console.log("Yuju... Llegamos a 48");
    } else {
        console.log(`12 * ${i} = ${resultado}`);
    }
    i++;
}

do {
    let resultado = 12 * i;
    if (resultado === 48) {
        console.log("Yuju... Llegamos a 48");
    } else {
        console.log(`12 * ${i} = ${resultado}`);
    }
    i++;
} while (i <= 10);
