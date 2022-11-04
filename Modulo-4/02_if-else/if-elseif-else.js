let clima = "nublado";
let horario = 21;
let dia = "lunes";

if (clima === "soleado" && horario < 18) {
    let mensaje = "vamos a dar un paseo";
    console.log(`Ya que el clima está ${clima} y son las ${horario}, entonces ${mensaje}`);
} else if (dia === "domingo") {
    console.log("Ok, no hace sol y está algo tarde, pero es domingo vamos a dar un paseo");
} else {
    console.log("Mejor nos quedamos en casa a estudiar con JaviScript");
}
