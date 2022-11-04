let clima = "soleado";
let horario = 21;
let dia = "domingo";

console.log((clima === "soleado" && horario < 18) || dia === "domingo");

if ((clima === "soleado" && horario < 18) || dia === "domingo") {
    let mensaje = "vamos a dar un paseo";
    console.log(`Ya que el clima está ${clima} y son las ${horario}, entonces ${mensaje}`);
} else {
    console.log("Mejor nos quedamos en casa a estudiar con JaviScript");
}
