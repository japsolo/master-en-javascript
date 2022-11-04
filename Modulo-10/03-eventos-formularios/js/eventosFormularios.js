const fullName = document.querySelector("#fullName");
const countries = document.querySelector("#countries");
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
    console.log("Ok, se va a enviar la información a algún lugar");
});

countries.addEventListener("change", (event) => {
    console.log("Cambió el país");
});

fullName.addEventListener("focus", () => {
    console.log("Hiciste foco sobre el full name");
});

fullName.addEventListener("blur", () => {
    console.log("Sacaste el foco del full name");
});

fullName.addEventListener("input", (event) => {
    console.log(event.data);
    console.log("Esto aparece cuando se escribe dentro del campo");
});

fullName.addEventListener("change", () => {
    console.log("El valor del campo cambió");
});
