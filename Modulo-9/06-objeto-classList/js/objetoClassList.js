const body = document.querySelector("body");
body.classList.toggle("dark"); // Alternador

const title = document.querySelector("h1");
title.classList.add("main-title");

console.log(title.classList.contains("que-no-existe"));
console.log(title.classList.contains("main-title"));

const paragraphs = document.querySelectorAll(".home-content p");

for (const oneParagraph of paragraphs) {
    oneParagraph.classList.add("cool-paragraph");
    // const lengthParagraph = oneParagraph.innerText.length;
    // if (lengthParagraph > 500) {
    // }
}

for (const oneParagraph of paragraphs) {
    const lengthParagraph = oneParagraph.innerText.length;
    if (lengthParagraph < 300) {
        oneParagraph.classList.remove("cool-paragraph");
    }
}
