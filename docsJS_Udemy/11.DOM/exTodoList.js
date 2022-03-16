function getData() {
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  return todoList;
}

function createTodo(todo, todoList) {
  const todoTemplate = document.getElementById('todoTemplate');

  const liElement = todoTemplate.content.firstElementChild.cloneNode(true);
  const liTitle = liElement.querySelector('.todo__title');

  liElement.dataset.id = todo.id;
  liTitle.textContent = todo.title;
  liElement.dataset.status = todo.status;

  const backgroundStatus = todo.status === 'completed' ? 'alert-success' : 'alert-danger';
  liElement.firstElementChild.classList.remove('alert-success', 'alert-danger');
  liElement.firstElementChild.classList.add(backgroundStatus);

  liElement.querySelector('.mark-as-done').addEventListener('click', () => {
    const newStatus = liElement.dataset.status === 'completed' ? 'pending' : 'completed';
    liElement.dataset.status = newStatus;
    todo.status = newStatus;
    const newBackgroundAlert =
      liElement.dataset.status === 'completed' ? 'alert-success' : 'alert-danger';
    liElement.firstElementChild.classList.remove('alert-success', 'alert-danger');
    liElement.firstElementChild.classList.add(newBackgroundAlert);

    localStorage.setItem('todoList', JSON.stringify(todoList));
  });

  liElement.querySelector('.remove').addEventListener('click', () => {
    const index = todoList.indexOf(todo);
    todoList.splice(index, 1);
    liElement.remove();

    localStorage.setItem('todoList', JSON.stringify(todoList));
  });

  liElement.querySelector('.update').addEventListener('click', () => {
    const index = todoList.indexOf(todo);
    const formUpdate = document.getElementById('form__update');
    if (formUpdate) {
      const todoUpdate = { ...todo };
      formUpdate.querySelector('#input__update__title').value = todo.title;
      formUpdate.querySelector('#input__update__status').value = todo.status;
      updateTodo(todoUpdate, index, todoList);
    }
  });

  return liElement;
}

function addTodo(todoList, ulElementID) {
  const addBtn = document.querySelector('.addTodo');
  addBtn.addEventListener('click', () => {
    statusElement = document.querySelector('#input__status');
    titleElement = document.querySelector('#input__title');
    if (titleElement.value == '') return;
    const newTodoFORM = {
      id: todoList.length + 1,
      title: titleElement.value,
      status: statusElement.value,
    };
    todoList.push(newTodoFORM);

    localStorage.setItem('todoList', JSON.stringify(todoList));
    renderTodoList(todoList, ulElementID);
    titleElement.value = '';
  });
}
function updateTodo(todo, index, todoList) {
  const formUpdate = document.getElementById('form__update');
  if (formUpdate) {
    formUpdate.querySelector('.updateTodo').addEventListener('click', () => {
      const newTitle = formUpdate.querySelector('#input__update__title').value;
      const newStatus = formUpdate.querySelector('#input__update__status').value;

      const newTodoList = [
        ...todoList.slice(0, index),
        {
          id: todo.id,
          title: newTitle,
          status: newStatus,
        },
        ...todoList.slice(index + 1),
      ];
      localStorage.setItem('todoList', JSON.stringify(newTodoList));

      renderTodoList(newTodoList, 'todoList');
    });
  }
}

function handleFilterCustom(filterName, filterType) {
  const url = new URL(window.location);
  url.searchParams.set(filterName, filterType);
  window.history.pushState({}, '', url);
}

function handleSearch(todoList, ulElementID, filter) {
  const formSearch = document.querySelector('#form__search');
  if (!formSearch) return;
  const inputSearch = formSearch.querySelector('#input__search');

  inputSearch.value = filter.title;
  inputSearch.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value) {
      const newTodoList = todoList.filter((todo) =>
        todo.title.trim().toLowerCase().includes(value.trim().toLowerCase())
      );

      renderTodoList(newTodoList, ulElementID);
      handleFilterCustom('title', inputSearch.value);
      handleSort(newTodoList, ulElementID, filter);
    } else {
      renderTodoList(todoList, ulElementID);
      handleFilterCustom('title', inputSearch.value);
      handleSort(todoList, ulElementID, filter);
    }
  });
}

function handleSort(todoList, ulElementID, filter) {
  const formSort = document.querySelector('#form__sort');
  if (!formSort) return;
  const inputSort = formSort.querySelector('#input__sort');
  inputSort.value = filter.status;
  const initTodoList = todoList.filter((todo) => todo.status === inputSort.value);
  renderTodoList(initTodoList.length === 0 ? todoList : initTodoList, ulElementID);
  handleSearch(initTodoList.length === 0 ? todoList : initTodoList, ulElementID, filter);
  inputSort.addEventListener('change', () => {
    const newTodoList = todoList.filter((todo) => todo.status === inputSort.value);

    renderTodoList(newTodoList.length === 0 ? todoList : newTodoList, ulElementID);
    handleFilterCustom('status', inputSort.value);
    handleSearch(newTodoList.length === 0 ? todoList : newTodoList, ulElementID, filter);
  });
}

function preventForm(e) {
  e.preventDefault();
}

function renderTodoList(todoList, ulElementID) {
  const ulElement = document.getElementById(ulElementID);
  ulElement.textContent = '';
  for (let todo of todoList) {
    const todoElement = createTodo(todo, todoList);
    ulElement.appendChild(todoElement);
  }
}
function getUrlParams(todoList, ulElementID) {
  const url = new URL(window.location);
  const params = new URLSearchParams(url.searchParams);

  const filter = {
    status: params.get('status'),
    title: params.get('title'),
  };
  handleSearch(todoList, ulElementID, filter);
  handleSort(todoList, ulElementID, filter);
}
(() => {
  let todoList = getData();
  let ulElementID = 'todoList';
  renderTodoList(todoList, ulElementID);
  addTodo(todoList, ulElementID);

  document.querySelector('#form__search').addEventListener('submit', preventForm);
  document.querySelector('#form__update').addEventListener('submit', preventForm);
  document.querySelector('#form__insert').addEventListener('submit', preventForm);
  document.querySelector('#form__sort').addEventListener('submit', preventForm);
  getUrlParams(todoList, ulElementID);
})();
