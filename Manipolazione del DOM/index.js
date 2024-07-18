const addProduct = () => {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value;

  if (taskValue !== "") {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskText = document.createTextNode(taskValue);

    li.appendChild(checkbox);
    li.appendChild(taskText);

    const taskList = document.getElementById("taskList");
    taskList.appendChild(li);

    taskInput.value = "";
  }
};
