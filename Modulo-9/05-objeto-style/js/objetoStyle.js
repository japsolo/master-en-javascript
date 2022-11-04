const title = document.querySelector("h1");
title.style.textAlign = "center";
title.style.backgroundColor = "yellow";
title.style.padding = "10px";

const paragraphs = document.querySelectorAll(".home-content p");

for (const oneParagraph of paragraphs) {
    oneParagraph.style.backgroundColor = "#222";
    oneParagraph.style.padding = "15px";
    oneParagraph.style.color = "#fff";
    oneParagraph.style.lineHeight = "20px";
    oneParagraph.style.fontFamily = "Verdana";
}
