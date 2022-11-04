// Event Handlers
// window.onload = function () {
//     const allParagraphs = document.querySelectorAll("p");
//     for (const paragraph of allParagraphs) {
//         paragraph.style.backgroundColor = "salmon";
//     }
// };

// window.onload = function () {
//     const mainTitle = document.querySelector("h1");
//     mainTitle.style.color = "red";
// };

// 1. String => Nombre de evento (sin el on)
// 2. Function => Callback - Event Handler

window.addEventListener("load", () => {
    const allParagraphs = document.querySelectorAll("p");
    for (const paragraph of allParagraphs) {
        paragraph.style.backgroundColor = "salmon";
    }
});

window.addEventListener("load", () => {
    const mainTitle = document.querySelector("h1");
    mainTitle.style.color = "red";
});
