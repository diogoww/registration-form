const signINbutton = document.getElementById("signIN");
const signUPbutton = document.getElementById("signUP");
const firstForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signINbutton.addEventListener("click", () => {
    container.classList.remove("right-panel");
});

signUPbutton.addEventListener("click", () => {
    container.classList.add("right-panel");
});

firstForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());