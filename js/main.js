/* eslint-disable no-console */
const form = document.querySelector('.add-item');
const todoInput = document.querySelector('input');
const trash = document.querySelectorAll('.trash');
let id = 1;

function deleteItem() {
  this.remove();
}

function addTodo(e) {
  e.preventDefault();

  const list = document.querySelector('.todo-item');
  const text = todoInput.value;
  let item = `
    <li id="li-${id}">
      <input class="trash" type="checkbox" />${text}
    </li>
  `;
  list.insertAdjacentHTML('beforeend', item);
  const current = document.querySelector(`#li-${id}`);
  current.addEventListener('click', deleteItem);
  id++;
  this.reset();
}

form.addEventListener('submit', addTodo);
