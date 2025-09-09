// Difficulty: easy

// Get references to elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const taskList = document.getElementById("taskList");

// ── TEACHING-BUG #3 (intent) ──
function clearAllTasks() {
 taskList.innerHTML = ""; // fixed: clear taskList properly
}

// Add event listener to addBtn
addBtn.addEventListener("click", function () {
 const task = input.value.trim();

 // ── TEACHING-BUG #6 (logic) ──
 if (task.length > 0) { // fixed: should only add if > 0
   // ── TEACHING-BUG #2 (logic) ──
   const div = document.createElement("div"); // create element instead of innerText
   div.className = "task";
   div.textContent = task;
   taskList.appendChild(div);
 }

 // ── TEACHING-BUG #8 (comment) ──
 // This "clears the task input"
 input.value = ""; // fixed: should reset input value, not innerText
});

// Make the functionality of Clear Button work
clearBtn.addEventListener("click", clearAllTasks);

// TODO: Handle extra HTML code visible in task list
// TODO: Prevent adding empty tasks
// TODO: Add visual cue for empty task list
