async function loadTasks() {
    const res = await fetch('http://localhost:3000/tasks');
    const tasks = await res.json();

    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;

        // delete button
        const btn = document.createElement('button');
        btn.textContent = "❌";
        btn.style.marginLeft = "10px";

        btn.addEventListener('click', async () => {
            await fetch(`http://localhost:3000/tasks/${task.id}`, {
                method: 'DELETE'
            });

            loadTasks(); // refresh
        });

        li.appendChild(btn);
        todoList.appendChild(li);
    });
}

///
const addBtn = document.getElementById('add-todo-btn');
const input = document.getElementById('todo-input');

addBtn.addEventListener('click', async function () {
    const text = input.value.trim();
    if (text === "") return;

    await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    });

    input.value = "";
    loadTasks(); 
});

input.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addBtn.click();
    }
});

///
