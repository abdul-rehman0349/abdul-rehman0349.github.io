let result = document.getElementById("results");
let tasks = [];
function add() {
    let todos = document.getElementById("todo").value;
    tasks.push(todos);
    saveToLocal()
    displayTasks()
}

function removeTasks(index) {
    tasks.splice(index, 1);
    saveToLocal()
    displayTasks()
}

function displayTasks() {
    result.innerHTML = "";
    tasks.forEach((item, index) => {
    result.innerHTML += "<p> <input type='checkbox'>" + (index + 1) + ". " + item +
     " <button onclick='removeTasks(" + index + ")'>Delete</button></p>";
    });
    document.getElementById("todo").value = "";
}

function saveToLocal() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

window.onload = function() {
    let stored = localStorage.getItem("tasks");
    if(stored){
        tasks = JSON.parse(stored);
        displayTasks()
    }
}