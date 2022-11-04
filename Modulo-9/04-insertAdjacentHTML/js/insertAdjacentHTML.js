const dynamicContentTag = document.querySelector("#dynamicContent");

// 1er Arg. = beforebegin || afterbegin || beforeend || afterend
// 2do. Arg. = contenido HTML

const students = [
    {
        name: "Caro",
        lastName: "TFSD",
        email: "caro@email.com",
        avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
        name: "John",
        lastName: "Doe",
        email: "john@email.com",
        avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
        name: "Javi",
        lastName: "Script",
        email: "javi@email.com",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Jane",
        lastName: "Smith",
        email: "jane@email.com",
        avatar: "https://i.pravatar.cc/150?img=7",
    },
    {
        name: "Peter",
        lastName: "Smithers",
        email: "peter@email.com",
        avatar: "https://i.pravatar.cc/150?img=6",
    },
];

for (const oneStudent of students) {
    dynamicContentTag.insertAdjacentHTML(
        "beforeend",
        `
            <img src="${oneStudent.avatar}" alt="" />
            <p class="special">${oneStudent.name} ${oneStudent.lastName}</p>
            <a href="mailto:${oneStudent.email}">${oneStudent.email}</a>
            <hr />
        `
    );
}
