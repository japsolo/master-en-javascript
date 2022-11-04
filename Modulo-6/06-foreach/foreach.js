const superHeroes = ["Superman", "Wonder Woman", "Spiderman", "Iron Man", "Black Widow", "Black Panther"];

superHeroes.forEach((heroe) => {
    console.log(heroe);
});

const nuevoArray2 = superHeroes.filter((heroe) => heroe.length > 10);
console.log(nuevoArray2);
