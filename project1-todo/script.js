const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const searchInput = document.getElementById("searchInput");
const emptyText = document.getElementById("empty");
const filters = document.querySelectorAll(".filter");

/* Load from storage */
let todos = JSON.parse(localStorage.getItem("todos")) || [];

let currentFilter = "all";

/* Add Todo */
addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keypress", e => {
  if (e.key === "Enter") addTodo();
});


function addTodo() {

  let text = todoInput.value.trim();

  if (text === "") return;

  todos.push({
    id: Date.now(),
    text,
    completed: false
  });

  todoInput.value = "";

  save();
  render();
}


/* Save */
function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}


/* Render */
function render() {

  todoList.innerHTML = "";

  let filtered = todos.filter(todo => {

    if (currentFilter === "pending")
      return !todo.completed;

    if (currentFilter === "completed")
      return todo.completed;

    return true;
  });


  let search = searchInput.value.toLowerCase();

  filtered = filtered.filter(todo =>
    todo.text.toLowerCase().includes(search)
  );


  emptyText.style.display =
    filtered.length === 0 ? "block" : "none";


  filtered.forEach(todo => {

    let li = document.createElement("li");

    if (todo.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
      <span>${todo.text}</span>

      <div class="todo-btns">

        <button class="done">✔</button>
        <button class="delete">✖</button>

      </div>
    `;


    /* Complete */
    li.querySelector(".done").onclick = () => {
      todo.completed = !todo.completed;
      save();
      render();
    };


    /* Delete */
    li.querySelector(".delete").onclick = () => {
      todos = todos.filter(t => t.id !== todo.id);
      save();
      render();
    };


    todoList.appendChild(li);

  });

}


/* Search */
searchInput.addEventListener("input", render);


/* Filters */
filters.forEach(btn => {

  btn.addEventListener("click", () => {

    filters.forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

    currentFilter = btn.dataset.type;

    render();
  });

});


/* First Load */
render();