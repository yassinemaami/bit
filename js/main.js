let inputText = document.querySelector(".input-text");
let inputText2 = document.querySelector(".input-text2");
var form = document.querySelector(".my-form");
var form2 = document.querySelector("#form2");
let tasks = document.querySelector(".tasks");
var editIndex = 0;
//
form.addEventListener("submit", added);
form2.addEventListener("submit", edited);
let tasksArray = [];
// //
// Remove
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("i3")) {
    removeTaskFromArray(e.target.parentElement.parentElement.classList[1]);
    e.target.parentElement.parentElement.remove();
  }
});
// Done
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("i1")) {
    var taskId = e.target.parentElement.parentElement.classList[1];
    e.target.parentElement.parentElement.classList.toggle("done");
  }
  toggleDoneInArray(taskId);
});
// Edit
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("i2")) {
    var taskId = e.target.parentElement.parentElement.classList[1];
    var editDiv = e.target.parentElement.parentElement;
    edit(taskId, editDiv);
  }
});
///
function added(event) {
  if (inputText.value !== "") {
    addTaskToArray(inputText.value);
    inputText.value = "";
  }
  event.preventDefault();
}

//
function addTaskToArray(task) {
  const taskObject = {
    id: Date.now(),
    title: task,
    completed: false,
  };
  //
  tasksArray.push(taskObject);
  addTasksToPage(tasksArray);
}
function addTasksToPage(tasksArray) {
  tasks.innerHTML = "";
  for (let i = 0; i < tasksArray.length; i++) {
    let doneClass = "";
    tasksArray[i].completed == true ? (doneClass = "done") : (doneClass = "");
    tasks.innerHTML =
      tasks.innerHTML +
      `
        <div class="row ${tasksArray[i].id} ${doneClass}">
        <div class="col-8 task">
        <h5>${tasksArray[i].title}</h5>
        </div>
        <div class="col-4 panel">
        <i class="fa-solid fa-check i1"></i>
        <i class="fa-solid fa-pen-to-square i2"></i>
        <i class="fa-solid fa-trash i3"></i>
        </div>
        </div>
    `;
  }
}
function removeTaskFromArray(taskId) {
  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].id == taskId) {
      tasksArray.splice(i, 1);
    }
  }
}
function toggleDoneInArray(taskId) {
  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].id == taskId) {
      tasksArray[i].completed == false
        ? (tasksArray[i].completed = true)
        : (tasksArray[i].completed = false);
    }
  }
}
function edit(taskId, editDiv) {
  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].id == taskId) {
      var taskTitle = tasksArray[i].title;
      editIndex = i;
    }
  }
  form2.style = "display :flex !important;;";
  form.style = "display :none !important;;";
  inputText2.value = taskTitle;
  editDiv.style = "background-color: rgb(219, 138, 53 ,0.5);";
  editDiv.firstElementChild.firstElementChild.style =
    "background-color: rgb(219, 138, 53 ,0.0);";
}

function edited(event) {
  if (inputText2.value != "") {
    tasksArray[editIndex].title = inputText2.value;
  }
  addTasksToPage(tasksArray);
  form2.style = "display :none !important;;";
  form.style = "display :flex !important;;";
  event.preventDefault();
}
localStorage.setItem("myCat", "Tom");
