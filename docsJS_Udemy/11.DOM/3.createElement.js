(() => {
  console.log('works');
  const ulElement = document.querySelector('#todoList');
  const todoList = [
    { id: 1, title: 'JavaScript' },
    { id: 2, title: 'ReactJS' },
    { id: 3, title: 'NodeJS' },
  ];
  for (let todo of todoList) {
    const liElement = document.createElement('li');
    liElement.textContent = todo.title;
    liElement.id = todo.id; // thêm attribute
    liElement.value = 'value'; // thêm attribute
    liElement.classList.add(todo.id); // thêm class
    ulElement.appendChild(liElement);
  }
  console.log(ulElement.innerText);
})();

const liElement = document.createElement('li'); // tạo ra thẻ
ulElement.appendChild(liElement); // thêm thẻ

// những cách thêm attribute
element.dataset.id = 'id';
element.id = 'id';
element.classList.add('tenClass');
element.classList.remove('tenClass');
element.classList.toggle('tenClass');
