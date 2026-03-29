let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function render() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;

    li.onclick = () => {
      task.done = !task.done;
      save();
    };

    if (task.done) {
      li.style.textDecoration = "line-through";
    }

    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = () => {
      tasks.splice(index, 1);
      save();
    };

    li.appendChild(btn);
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");

  tasks.push({
    text: input.value,
    done: false
  });

  input.value = "";
  save();
}

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  render();
}

render();
