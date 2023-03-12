const registerForm = document.querySelector(".register-form")

registerForm.addEventListener("submit", registerUser)

async function registerUser(event) {
    event.preventDefault()

    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const passwordRetype = document.querySelector("#password_retype").value
    const password = document.querySelector("#password").value

    let response = await postData(`http://localhost/api/register`, {
        "name": name,
        "email": email,
        "password": password,
        "password_retype": passwordRetype
    })

    console.log(response.status)
    if (response.status === 200){
        window.location.href = "/login"
    }
}

// Example POST method implementation:
async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        type: "json",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}
