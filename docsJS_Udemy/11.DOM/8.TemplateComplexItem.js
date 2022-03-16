{
  /* <template></template>; // đây là loại thẻ đặc biệt dùng cho html, nó ko hiện thị nội dung lên html,nhưng js có thể thao tác được với nó

// để lấy nội dung bên trong của template

element.content.querySelector('');
element.content.firstElementChild; */
}

(() => {
  const ulElement = document.querySelector('#todoList2');
  const templateElement = document.querySelector('template');

  const todoList = [
    { id: 1, title: 'JavaScript' },
    { id: 2, title: 'ReactJS' },
    { id: 3, title: 'NodeJS' },
  ];
  for (let todo of todoList) {
    const liElement = templateElement.content.firstElementChild.cloneNode(true);
    liElement.dataset.id = todo.id;
    liElement.innerHTML += `<p>${todo.title}</p>`;
    ulElement.appendChild(liElement);
  }
})();
