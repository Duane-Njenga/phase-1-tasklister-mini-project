document.addEventListener("DOMContentLoaded", () => {
  form = document.querySelector('#create-task-form')
  formInput = document.querySelector('#new-task-description')
  taskList = document.querySelector('#tasks')

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(formInput.value);
    form.reset();
  })
});

function buildToDo(todo){
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', deleteTodo)
  btn.textContent = "Delete"
  li.textContent = `${todo} `;
  li.appendChild(btn);
  taskList.appendChild(li);
}

function deleteTodo(e){
  e.target.parentNode.remove();
}