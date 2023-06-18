// const todosList = [];
// const todoForm = document.getElementById("todoForm");
// const todoList = document.getElementById("todoList");

// const renderList = () => {
//   todoList.innerHTML = "";
//   let content = "";
//   todosList.map((todo) => {
//     const ul = `<li id="${todo.id}">  <input type="checkbox"> ${todo.text}  <button>Del</button> </li>`;
//     content += ul;
//   });
//   todoList.innerHTML = content;
// };

// todoForm.addEventListener("submit", (e) => {
//   const field = document.getElementById("todoInput");
//   e.preventDefault();

//   const newTodo = {
//     id: Date.now(),
//     date: new Date(),
//     text: field.value,
//     status: false,
//   };
//   field.value = "";

//   todosList.push(newTodo);

//   renderList();
// });

const todosList = [];
const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");
const noTodosMessage = document.getElementById("noTodosMessage");

const renderList = () => {
  todoList.innerHTML = "";
  let content = "";
  todosList.map((todo) => {
    const checkbox = ` <input type="checkbox" onchange="toggleTodoStatus(${
      todo.id
    })" ${todo.status ? "checked" : ""}>`;
    const text = `<span style="color: ${todo.status ? "gray" : "black"};">${
      todo.text
    }</span>`;
    const button = `<button onclick="deleteTodo (${todo.id})" ${
      !todo.status ? "disabled" : ""
    }>Del </button>`;
    const li = `<li id="${todo.id}"> ${checkbox}${text}${button} </li>`;
    content += li;
  });
  todoList.innerHTML = content;

  if (todosList.length === 0) {
    noTodosMessage.style.display = "block";
  } else {
    noTodosMessage.style.display = "none";
  }
};

const toggleTodoStatus = (id) => {
  const todo = todosList.find((todo) => todo.id === id);
  if (todo) {
    todo.status = !todo.status;
    renderList();
  }
};

const deleteTodo = (id) => {
  const index = todosList.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todosList.splice(index, 1);
    renderList();
  }
};
document.addEventListener("DOMContentLoaded", () => {
  if (todosList.length === 0) {
    noTodosMessage.style.display = "block";
  } else {
    noTodosMessage.style.display = "none";
  }
});

todoForm.addEventListener("submit", (e) => {
  const field = document.getElementById("todoInput");
  e.preventDefault();

  const newTodo = {
    id: Date.now(),
    date: new Date(),
    text: field.value,
    status: false,
  };
  field.value = "";

  todosList.push(newTodo);

  renderList();
});
