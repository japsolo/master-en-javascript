let day = "sunday";
let dia;

switch (day) {
    case "monday":
        dia = "Lunes";
        break;
    case "tuesday":
        dia = "Martes";
        break;
    case "wednesday":
        dia = "Miércoles";
        break;
    case "thursday":
        dia = "Jueves";
        break;
    case "friday":
        dia = "Viernes";
        break;
    case "saturday":
        dia = "Sábado";
        break;
    default:
        dia = "Domingo";
}

console.log(`El día es ${dia}`);
