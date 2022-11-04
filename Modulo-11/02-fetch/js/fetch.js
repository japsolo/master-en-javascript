const usersList = document.querySelector("#usersList");

fetch("https://reqres.in/api/users?page=2")
    .then((response) => {
        return response.json();
    })
    .then((info) => {
        const users = info.data;
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
    })
    .catch((error) => {
        console.log(error);
    });
