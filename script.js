const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">X</button>
  `;

  // Toggle completed
  li.querySelector("span").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete task
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = "";
});
