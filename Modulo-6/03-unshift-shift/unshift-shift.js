const superHeroes = ["Superman", "Wonder Woman", "Iron Man", "Hulk"];

superHeroes.unshift("Wolverine", "Profesor X", "Spiderman", "Black Widow");
const elPrimero = superHeroes.shift();
console.log(elPrimero);
console.log(superHeroes);
