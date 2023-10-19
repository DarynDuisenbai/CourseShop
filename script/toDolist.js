// Function to add a new task
function addTask() {
    var taskText = document.getElementById("new-task").value;
    if (taskText.trim() === "") {
        alert("Please enter a course name.");
        return;
    }

    var ul = document.getElementById("tasks");
    var li = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () {
        li.style.textDecoration = checkbox.checked ? "line-through" : "none";
    };

    var text = document.createElement("span");
    text.innerText = taskText;

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
        ul.removeChild(li);
    };

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteButton);

    ul.appendChild(li);
    document.getElementById("new-task").value = "";
}