document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const resetButton = document.getElementById('resetButton'); // New reset button
    const taskList = document.getElementById('taskList');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskDiv = document.createElement('div');
            taskDiv.className = `task ${task.completed ? 'completed' : ''}`;
            taskDiv.innerHTML = `
                <span>${task.name}</span>
                <button onclick="deleteTask(${index})">Delete</button>
            `;
            taskDiv.addEventListener('click', () => toggleTaskCompletion(index));
            taskList.appendChild(taskDiv);
        });
    }

    function addTask() {
        const taskName = taskInput.value.trim();
        if (taskName) {
            tasks.push({ name: taskName, completed: false });
            taskInput.value = '';
            saveTasks();
            renderTasks();
        }
    }

    function toggleTaskCompletion(index) {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }

    function resetTasks() {
        tasks = []; // Clear the tasks array
        localStorage.removeItem('tasks'); // Clear tasks from localStorage
        renderTasks(); // Re-render the task list
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    addTaskButton.addEventListener('click', addTask);
    resetButton.addEventListener('click', resetTasks); // Link reset button to the reset function
    renderTasks();
});
