const usersList = document.querySelector("#usersList");

const generateUsersHTML = (users) => {
    for (const user of users) {
        usersList.insertAdjacentHTML(
            "beforeend",
            `
                <div>
                    <img src="${user.avatar}" alt="" />
                    <h2>${user.first_name} ${user.last_name}</h2>
                    <a href="mailto${user.email}">${user.email}</a>
                    <hr />
                </div>
            `
        );
    }
};

const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1").then((response) => response.json());
    const users = response.data;
    generateUsersHTML(users);
};

getUsers();
