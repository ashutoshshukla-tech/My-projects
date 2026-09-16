const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


// Task add karna
function addTask() {

    const taskText = taskInput.value.trim();

    // Agar input empty hai
    if (taskText === "") {
        return;
    }


    // New list item banana
    const li = document.createElement("li");


    // Task ka text
    const span = document.createElement("span");

    span.innerText = taskText;
    span.classList.add("task-text");


    // Delete button
    const deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-btn");


    // Delete button par click
    deleteButton.onclick = function() {
        li.remove();
    };


    // Elements ko list item mein add karna
    li.appendChild(span);
    li.appendChild(deleteButton);


    // List mein task add karna
    taskList.appendChild(li);


    // Input box empty karna
    taskInput.value = "";
}