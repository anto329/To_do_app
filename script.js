const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


addBtn.addEventListener("click", addTask);


taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

 
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      const confirmComplete = confirm("Completed?");
      if (confirmComplete) {
        li.classList.add("completed");
      } else {
        checkbox.checked = false;
      }
    } else {
      li.classList.remove("completed");
    }
  });

  
  const span = document.createElement("span");
  span.textContent = taskText;

  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => li.remove());

  
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
}
