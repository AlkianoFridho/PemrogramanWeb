let taskList = [];
let editIndex = null;

function addTask() {
    const taskInput = document.getElementById("newTask");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    if (editIndex !== null) {
        taskList[editIndex] = taskText;
        editIndex = null;
    } else {
        taskList.push(taskText);
    }

    taskInput.value = "";
    displayTasks();
}

function displayTasks() {
    const taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = "";

    taskList.forEach((task, index) => {
        const listItem = document.createElement("li");

        const taskText = document.createElement("input");
        taskText.type = "text";
        taskText.value = task;
        taskText.setAttribute("readonly", true);
        
        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.onclick = () => editTask(index);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = () => deleteTask(index);

        listItem.appendChild(taskText);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        taskListElement.appendChild(listItem);
    });
}

function editTask(index) {
    const taskInput = document.getElementById("newTask");
    taskInput.value = taskList[index];
    editIndex = index;
}

function deleteTask(index) {
    taskList.splice(index, 1);
    displayTasks();
}
