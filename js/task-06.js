const input = document.getElementById("validation-input");

input.addEventListener("focus", () => {
    console.log("focus");
});
input.addEventListener("blur", () => {
    console.log("blur");
});
input.addEventListener("blur", function () {
    const enteredLength = this.value.length;
    const requiredLength = this.getAttribute("data-length");

    if (enteredLength == requiredLength) {
        this.classList.remove("invalid");
        this.classList.add("valid");
    } else {
        this.classList.remove("valid");
        this.classList.add("invalid");
    }
});
