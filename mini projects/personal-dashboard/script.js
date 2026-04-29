// Set time
function setClock() {
    let clock = document.querySelector("#clock");
    let a = new Date();
    let hours = String(a.getHours()).padStart(2,'0');
    let min = String(a.getMinutes()).padStart(2,'0');
    let sec = String(a.getSeconds()).padStart(2,'0');
    clock.textContent = `${hours}:${min}:${sec}`;
}

setInterval(setClock, 1000);
setClock();

// DOM elements
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

//enter event
todoInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addTodoBtn.click(); 
    }
});

// Function to save tasks to localStorage
function saveTask() {
    const tasks = [];
    document.querySelectorAll('#todo-list li').forEach(task => {
        tasks.push({
            text: task.firstChild.textContent, // task text
            completed: task.classList.contains('completed') // completed state
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(t => {
        const li = document.createElement('li');
        li.textContent = t.text;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";
        li.appendChild(deleteBtn);

        // Restore completed state
        if(t.completed){
            li.classList.add('completed');
            li.style.textDecoration = 'line-through';
        }

        // Mark complete toggle
        li.addEventListener('click', function() {
            if(li.classList.contains('completed')){
                li.classList.remove('completed');
                li.style.textDecoration = 'none';
            } else {
                li.classList.add('completed');
                li.style.textDecoration = 'line-through';
            }
            saveTask();
        });

        // Delete task
        deleteBtn.addEventListener('click', function(e){
            e.stopPropagation();
            todoList.removeChild(li);
            saveTask();
        });

        todoList.appendChild(li);
    });
}

// Call on page load
loadTasks();

// Add new task
addTodoBtn.addEventListener('click', function(){
    const task = todoInput.value.trim();
    if(task === ""){
        return;
    }
    
    //check duplicates task
    const tasks = Array.from(todoList.querySelectorAll('li')).map(li=>li.firstChild.textContent);
    if(tasks.includes(task)){
        alert("task already exists!");
        todoInput.value = "";
        return;
    }

    const li = document.createElement('li');
    li.textContent = task;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    li.appendChild(deleteBtn);

    // Mark complete toggle
    li.addEventListener('click', function(){
        if(li.classList.contains('completed')){
            li.classList.remove('completed');
            li.style.textDecoration = 'none';
        } else {
            li.classList.add('completed');
            li.style.textDecoration = 'line-through';
        }
        saveTask();
    });

    // Delete task
    deleteBtn.addEventListener('click', function(e){
        e.stopPropagation();
        todoList.removeChild(li);
        saveTask();
    });

    todoList.appendChild(li);
    todoInput.value = "";
    saveTask(); // save after adding
});

//-----------------for notes----------------------//
// DOM elements for Notes
const noteInput = document.getElementById('note-input');
const addNoteBtn = document.getElementById('add-note-btn');
const notesList = document.getElementById('notes-list');

// Save notes to localStorage
function saveNotes() {
    const notes = [];
    document.querySelectorAll('#notes-list li').forEach(note => {
        notes.push(note.textContent);
    });
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Load notes from localStorage
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(n => {
        const li = document.createElement('li');
        li.textContent = n;

        // Delete note on click
        li.addEventListener('click', function(){
            notesList.removeChild(li);
            saveNotes();
        });

        notesList.appendChild(li);
    });
}

// Call on page load
loadNotes();

// Add new note
addNoteBtn.addEventListener('click', function(){
    const note = noteInput.value.trim();
    if(note === "") return;

    const li = document.createElement('li');
    li.textContent = note;

    li.addEventListener('click', function(){
        notesList.removeChild(li);
        saveNotes();
    });

    notesList.appendChild(li);
    noteInput.value = "";
    saveNotes();
});

// Optional: allow Enter + Shift key to add note
noteInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter' && !e.shiftKey){
        e.preventDefault(); // prevent new line
        addNoteBtn.click();
    }
});

//button for notes 
addNoteBtn.addEventListener('click', function(){
    const note = noteInput.value.trim();
    if(note === "") return;

    // create li etc...
    notesList.appendChild(li);

    noteInput.value = "";
    noteInput.focus(); 
    saveNotes();
});