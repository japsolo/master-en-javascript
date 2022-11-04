const h1Tag = document.querySelector("h1");
h1Tag.innerHTML = `${h1Tag.innerText} <em>es lo mejor</em>`;
console.log(h1Tag.innerHTML);
console.log(h1Tag.innerText);

const firstP = document.querySelector("p");
firstP.innerText = firstP.innerText.toUpperCase();
