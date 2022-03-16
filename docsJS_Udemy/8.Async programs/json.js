// JSON - javascript Object Notation
JSON.parse(text); // chuyển từ JSON string sang javascript value
JSON.stringify(value); // chuyển từ javascript value sang JSON string

const student = { id: 1, name: 'Easy Frontend', age: undefined };
JSON.stringify(student);
// '{"id": 1, "name": "Easy Frontend" }'

const list = [null, undefined, NaN];
JSON.stringify(list);
// '[null, null, null]'

JSON.parse('123'); // 123
JSON.parse('true'); // true
JSON.parse('null'); // null
JSON.parse('{}'); // {}
JSON.parse('[]'); // []

JSON.parse('0123'); // Syntax Error
JSON.parse('NaN'); // Syntax Error
JSON.parse('Infinity'); // Syntax Error

// property name must use double quotes
JSON.parse("{ 'id': 123 }"); // Syntax Error
JSON.parse('{ "id": 123 }'); // { id: 123 } it works

//có dấu phẩy ở dưới cũng lỗi
JSON.parse('[1, 2, 3, 4, ]');
JSON.parse('{"foo" : 1, }');

JSON.parse(localStorage.getItem('key'));
localStorage.setItem('key', JSON.stringify(value));
localStorage.removeItem('key');
