"use strict";

window.addEventListener("load", app);

async function app() {
    const users = await getData();
    showUsers(users);
    console.log(users);

    document.querySelector("#admin-count").textContent = `${
        countRole("admin", users).length
    }`;
    document.querySelector("#user-count").textContent = `${
        countRole("user", users).length
    }`;
    document.querySelector("#guest-count").textContent = `${
        countRole("guest", users).length
    }`;
}

async function getData() {
    const data = await fetch("users.json");

    return data.json();
}

function showUsers(users) {
    for (const user of users) {
        const html = /*html*/ `
<ul>${user.name}, ${user.role}, ${user.active}</ul>
`;
        document
            .querySelector("#userlist")
            .insertAdjacentHTML("beforeend", html);
    }
}

function countRole(role, users) {
    return users.filter(user => user.role === role);
}
