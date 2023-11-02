const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = this.elements.email.value;
    const password = this.elements.password.value;

    if (email === "" || password === "") {
        alert("Toate campurile trebuie completate!");
    } else {
        const formData = {
            email,
            password,
        };

        console.log(formData);
        this.reset();
    }
});
