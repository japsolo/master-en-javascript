let day = "sunday";
let dia;

if (day === "monday") {
    dia = "Lunes";
} else if (day === "tuesday") {
    dia = "Martes";
} else if (day === "wednesday") {
    dia = "Miércoles";
} else if (day === "thursday") {
    dia = "Jueves";
} else if (day === "friday") {
    dia = "Viernes";
} else if (day === "saturday") {
    dia = "Sábado";
} else {
    dia = "Domingo";
}

console.log(`El día es ${dia}`);
