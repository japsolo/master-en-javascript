const users = [
    { name: "John", email: "jhon@email.com" },
    { name: "Jane", email: "jane@email.com" },
    { name: "Javi", email: "javi@email.com" },
    { name: "Caro", email: "caro@email.com" },
];

const getUsers = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve(users);
            }, 1500);
        } else {
            reject("No se pudo concretar tu solicitud");
        }
    });
};

getUsers()
    .then((data) => {
        const usersDB = data;
        console.log(usersDB);
    })
    .catch((error) => {
        console.log(error);
    });
