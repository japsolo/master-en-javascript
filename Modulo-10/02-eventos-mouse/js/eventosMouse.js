const body = document.querySelector("body");
const btn01 = document.querySelector("#btn01");
const btn02 = document.querySelector("#btn02");

const colors = ["yellow", "orange", "green", "red", "pink", "olive", "salmon"];

btn01.addEventListener("dblclick", () => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    const choosenColor = colors[randomNumber];
    body.style.backgroundColor = choosenColor;
});

const cssClasses = ["dark", "cream", "mistery"];

btn02.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * cssClasses.length);
    const choosenClass = cssClasses[randomNumber];
    body.style.backgroundColor = "";
    body.classList.remove(...cssClasses);
    body.classList.add(choosenClass);
});
