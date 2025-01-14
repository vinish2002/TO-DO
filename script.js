function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== '') {
        var li = document.createElement("li");
        li.textContent = taskInput.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';

        li.addEventListener('click', function () {
            this.classList.toggle('completed');
        });

        deleteBtn.addEventListener('click', function (event) {
            event.stopPropagation();
            this.parentElement.remove();
        });
    }
}
