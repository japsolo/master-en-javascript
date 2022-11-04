const saludar = (nombrePersona = "persona desconocida") => `Hola ${nombrePersona}`;

console.log(saludar());

const getUserAge = (yearBirth, name = "unkown person") => {
    const currentAge = 2022 - yearBirth;
    return `Hello ${name}, your current age is ${currentAge}`;
};

console.log(getUserAge(1990));
console.log(getUserAge(1987, "Javi"));
