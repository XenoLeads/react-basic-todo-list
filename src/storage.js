const intial_todos = [
  {
    id: crypto.randomUUID(),
    text: "This is a todo",
    checked: false,
  },
  {
    id: crypto.randomUUID(),
    text: "This is another todo",
    checked: true,
  },
  {
    id: crypto.randomUUID(),
    text: "This is yet another todo",
    checked: false,
  },
];

function save(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function get() {
  const todos = JSON.parse(localStorage.getItem("todos"));
  return todos === null || (Array.isArray(todos) && todos.length < 1) ? intial_todos : todos;
}

export default {
  save,
  get,
};
