/// node: body, head,title,script
// thẻ node này ít dùng, vì đối với khoảng trắng trong html nó vẫn hiểu là 1 Element text
node.parentNode;
node.childNodes;
node.firstChild;
node.lastChild;
node.previousSibling;
node.nextSibling;

//Element thường dùng nhất
const element = document.querySelector('div');
element.childNodes;
element.firstElementChild;
element.lastElementChild;
element.previousElementChild;
element.nextElementChild;
