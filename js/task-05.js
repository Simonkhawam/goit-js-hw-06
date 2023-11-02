const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", (e) => {
    console.log(e);
    nameOutput.innerHTML = e.target.value;
});
