// tương tác với các attribute có sẵn
element.className; //lấy ra class
element.id;
element.hidden; //true  or false
element.title; //title này dùng để hover lên thẻ nó sẽ hiện ra == giống với gợi ý
element.href;
element.scr;
//.....

// tương tác với các attribute tự chế
element.getAttribute(name);
element.setAttribute(name, value);
element.hasAttribute(name);
element.toggleAttribute(name);
element.removeAttribute(name);
element.attributes(); // lấy ra danh sách atr

// thường dùng dataset để custom attribute
element.dataset.test = '1';
// xóa attribute custom
delete element.dataset.test;
//style
element.style.backgroundColor = '#FFFFFF';
element.style.fontSize = '16px';

//lấy style cuối cùng được tính toán xong rồi mới hiển thị trên UI
const computedStyle = getComputedStyle(element);
computedStyle.width; //lấy ra được cái width sau khi tính toán

// trên màn hình elements có 1 tab computedStyle
