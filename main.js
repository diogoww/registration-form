const signINbtn = document.getElementById("signIN");
const signUPbtn = document.getElementById("signUP");
const firstform = document.getElementById("form1");
const secondform = document.getElementById("form2");
const container = document.querySelector(".container");

signINbtn.addEventListener("click", () => {
    container.classList.remove("right-panel");
});

signUPbtn.addEventListener("click", () => {
    container.classList.add("right-panel");
});

firstform.addEventListener("submit", (e) => e.preventDefault());
secondform.addEventListener("submit", (e) => e.preventDefault());
