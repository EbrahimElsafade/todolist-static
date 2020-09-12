var element = document.getElementById("flip");

function addTask() {
   element.classList.add("flip");
}

function afterAddingTask() {
   element.classList.remove("flip");
}