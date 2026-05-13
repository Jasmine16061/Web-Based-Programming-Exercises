const input = document.getElementById('todo-input');
const hourSelect = document.getElementById('hour-select');
const minuteSelect = document.getElementById('minute-select');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('myTodoList')) || [];

function init() {
    for (let i = 0; i < 24; i++) {
        let hr = i < 10 ? '0' + i : i;
        hourSelect.innerHTML += `<option value="${hr}">${hr}</option>`;
    }
    for (let i = 0; i < 60; i += 5) {
        let min = i < 10 ? '0' + i : i;
        minuteSelect.innerHTML += `<option value="${min}">${min}</option>`;
    }
    
    renderTasks();
}

function saveToLocalStorage() {
    localStorage.setItem('myTodoList', JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";
    tasks.sort((a, b) => a.time.localeCompare(b.time));

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        if (task.completed) li.classList.add('completed');

        li.innerHTML = `
            <div class="task-content">
                <span class="task-time">${task.time}</span>
                <span class="task-text">${task.text}</span>
            </div>
            <div class="btn-group">
                <button class="complete-btn" onclick="toggleTask(${index})">Done</button>
                <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

addBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) return alert("Please fill in the task!");

    tasks.push({
        text: text,
        time: `${hourSelect.value}:${minuteSelect.value}`,
        completed: false
    });

    input.value = "";
    saveToLocalStorage(); 
    renderTasks();
});

window.toggleTask = (i) => { 
    tasks[i].completed = !tasks[i].completed; 
    saveToLocalStorage();
    renderTasks(); 
};

window.deleteTask = (i) => { 
    tasks.splice(i, 1); 
    saveToLocalStorage(); 
    renderTasks(); 
};

init();