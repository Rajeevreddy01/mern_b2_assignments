const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTask"); // ── TEACHING-BUG #2 (logic) ── Fixed ID
const clearBtn = document.getElementById("clearAll");
const list = document.getElementById("taskList");
const count = document.getElementById("taskCount");

let tasks = [];

// ── TEACHING-BUG #5 (logic)
function addTask() {
 const task = input.value.trim();

 if (task === "") return; // Avoid adding empty tasks

 // ── TEACHING-BUG #6 (logic)
 // TODO: Push task to array
 if (!tasks.includes(task)) {   // prevent duplicates
   tasks.push(task);
 }

 renderTasks();
 input.value = "";
 input.focus();
}

// ── TEACHING-BUG #7 (logic) ──
function clearAllTasks() {
 tasks = [];
 renderTasks(); // Clear tasks and update the list view
}

// Renders all tasks from the array
function renderTasks() {
 list.innerHTML = "";

 tasks.forEach((task) => {
   const li = document.createElement("li");
   li.className = "task-item";
   li.innerText = task;
   list.appendChild(li);
 });

 // ── TEACHING-BUG #8 (logic)
 // TODO: Update task count text here
 count.textContent = `You have ${tasks.length} task${tasks.length !== 1 ? "s" : ""}.`; // Correctly pluralizes "task" based on the count
}

// ── TEACHING-BUG #9 (event)
document.addEventListener("keypress", function (e) {
 if (e.key === "Enter") {
   addTask(); // Fixed action to add the task on Enter press
 }
});

// ── TEACHING-BUG #10 (intent)
// TODO: Prevent duplicate task names (optional)
addBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearAllTasks);
