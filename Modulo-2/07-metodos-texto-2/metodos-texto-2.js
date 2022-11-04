let nombreCompleto = "Mariana Fernández";

// startsWith - Empieza con
console.log(nombreCompleto.startsWith("a"));
console.log(nombreCompleto.startsWith("m"));
console.log(nombreCompleto.startsWith("M"));

// trim - Podar, eliminar los espacios
let miMascota = "      archivaldo bolardo     ";
let miMascotaSinEspacios = miMascota.trim();
console.log(miMascotaSinEspacios.length);
console.log(miMascotaSinEspacios);

// repeat - repetir
let nana = "Na na";
console.log(nana.repeat(5));
console.log("Batmaaaaan");

// replace - reemplazar
let nombreErrado = "Huam Perez";
console.log(nombreErrado.replace("Huam", "Juan"));

// replaceAll - reemplazar todo
console.log(nombreErrado.replaceAll("e", "i"));
