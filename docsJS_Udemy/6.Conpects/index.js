//////////////////////////////////////////Scope//////////////////////////
// Scope là phạm vi hoạt động của một biến
// block scope là trong 1 cặp ngoặc nhọn if, for
// function scope là phạm 1 function
// lexical scope là 1 hàm bên trong có thể truy cập ra biến nằm bên ngoài hàm(gần giống với clouser )
// Global Scope là phạm vi toàn cầu

// const, let là block scope
// var là function scope

// Global Object trong trình duyệt là window vd: window.with()
// Global Object trong Nodejs là global

// Scope Chain: 1 biến được khai báo nhiều tầng, khi được gọi nó sẽ lấy tầng khai báo gần nhất
//ví dụ về scope Chain
function profile() {
    const name = 'LamTruong';

    function sayName() {
        const name = 'TEDsHope';

        function writeName() {

            return name; // TEDsHope
        }
        return writeName();
    }
    return sayName();
}
console.log(profile());


//////////////////////////////////Hoisting///////////////////////////////////////////////////////
//Hoisting là quá trình di chuyển phần khai báo biến lên trên đầu code
// var sẽ bị hoisting
// function declaration sẽ bị hoisting vd function logger() {}
//let, const vẫn bị hoisting nhưng kèm theo Temporal Dead Zone (ko dùng được trước dòng khai báo) => sinh ra lỗi
// function expression sẽ không bị hoisting vd: const logger = function () {}

//ví dụ: hoisting
console.log(n) // undefined
var n = 10;
console.log(n) //10

sum(1, 2) //3
function sum(a, b) {
    return a + b;
}

// ví dụ: không hoisting
console.log(n); // thông báo lỗi
let n = 10;

sum(1, 2); //thoong báo lỗi
const sum = function (a, b) {
    return a + b;
}

// chú ý:
let sum = 10;
let sum = 11; // lỗi
var sum2 = 10;
var sum2 = 11; // không lỗi


//////////////////////////////////IIFE///////////////////////////////////////////////////////
//IIFE là hàm được chạy ngay sau khi thực thi và chỉ thực thi đúng 1 lần duy nhất
// thường dùng trong hàm useEffect của ReactJS trong đó tạo ra hàm call API bằng IIFE
//mọi biến khai báo trong function IIFE bị xóa ngay sau khi hàm thực
(function () {})(); // dạng 1
(() => {})(); //dạng 2
(async () => {})(); //dạng 3 dùng với async
((a, b) => a + b)(1, 2); // => 3


//////////////////////////////////Clourse///////////////////////////////////////////////////////
// Clourse là function sử dụng 1 biến bên ngoài của function cha và trong hàm cha có return về function con đó

function createCouter(initialValue) {
    let value = initialValue || 0;
    const increase = () => value++;
    const decrease = () => value--;
    const getValue = () => value;

    return {
        increase,
        decrease,
        getValue,
    };
}

const counter = createCouter(0); // mỗi lần gọi hàm này sẽ tạo ra 1 môi trường lexical riêng cho nó
counter.increase(); //1
counter.increase(); //2
counter.decrease(); //1
counter.getValue(); //1

// sử dụng clouser cho kĩ thuật memoization(kĩ thuật ghi nhớ như trên)


//////////////////////////////làm việc với function///////////////////////

function sum(a = 3, b = 2) {
    return a + b;
}
console.log(sum(1)); //3

// dùng arguments để gọi chung tham số truyền vào

function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sum([1, 2, 3, 4]));

////rest parameters giống với arguments ở trên
// khuyến khích dùng cách này
function sum(...numberList) {
    return numberList.reduce((acc, curr) => acc + curr, 0);
}

/////spread
const numberList = [1, 2, 3];
console.log(sum(...numberList));
const name = 'lamTruong';
console.log(...name); //l,a,m,T,r,u,o,n,g

const getName = () => ({
    name: 'LamTruong',
    age: '21'
}) //return về 1 object cần thêm ngoặc tròn

////curry function: là function return function
function sum(x) {
    return function (y) {
        return x + y;
    }
}
sum(1)(2) //3
//
function getID() {
    let id = 0;
    return function () {
        return id++;
    }
}
const getNetID = getID();
getNetID(); //1
getNetID(); //2
getNetID(); //3

//////////////////////////////////////// một số khái niệm cơ bản
///property shorthand
const student = {
    name,
    age
}

////Computed property name
key = 'power';
const student = {
    'tên của bạn': 'LamTruong',
    [key]: 50, //power :50
}

////Method property
const student = {
    age: 21,
    getName() {
        return 'LamTruong';
    },
    // tương đương
    getName: function () {
        return 'LamTruong';
    }
}

////Destructuring
const student = {
    name: 'lamTruong',
    age: 21
};
const {
    name: nameStudent, // lấy name trong student và đổi nó key thành nameStudent
    age
} = student;


//////////////////////////////từ khóa this///////////////////////

//Global
console.log(this === window) //true
this.name = 'LamTruong';
console.log(window.name) // LamTruong

//normal function
'use strict';

function sayHello() {
    console.log(this);
}
sayHello(); //undefined
//
'use strict';

function sayHello() {
    getName = () => {
        console.log(this);
    }
}
sayHello(); // với arrow function vẫn in ra được windowObject dù có strict hay ko

///////////////////////

const student = {
    name: 'lamTruong',
    sayHello() {
        console.log('Hello', this.name)
    }
}
student.sayHello() // Hello lamTruong
// với arrow function 
const student = {
    name: 'lamTruong',
    sayHell = () => {
        console.log('Hello', this.name)
    }
}
student.sayHello() // Hello undefined

//////////////////////////////call, apply, blind///////////////////////
// dùng để bind this context cho 1 function, không dùng cho arrow function
// call:
// Gọi hàm và cho phép bạn truyền vào một object và các đối số phân cách nhau bởi dấu phẩy (Comma)
// vd: fun.call(thisArg, arg1, arg2, ...)

// apply:
// Gọi hàm và cho phép bạn truyền vào một object và các đối số thông qua mảng (Array)
// vd: fun.apply(thisArg, [argsArray]);

// blind:
// Trả về một hàm mới, cho phép bạn truyền vào một object và các đối số phân cách nhau bởi dấu phẩy.
// vd: var newFunction = fun.bind(thisArg,arg1, arg2, ...)


// Nhìn chung, hàm call và apply là gần giống nhau. 
// Chúng đều gọi hàm trực tiếp. 
// Chỉ khác ở cách truyền tham số vào (với call thì đối số phân cách bởi dấu phẩy comma và với apply thì đối số cho bởi mảng array)
// Hàm bind thì hơi khác hơn một chút. 
// Hàm này không gọi hàm trực tiếp mà nó sẽ trả về một hàm mới. 
// Và bạn có thể sử dụng hàm mới này sau. Về cách truyền tham số vào thì nó giống với hàm call.
'use strict';

function sayHello(age, status) {
    console.log(this.name, age, status);
}
const student = {
    name: 'lamTruong',
}
// dùng bind()
const studentHello = sayHello.bind(student, 21, 'alone');
studentHello();
//dùng call()
sayHello.call(student, 21, 'alone');
//dùng apply()
sayHello.apply(student, [21, 'alone']);

//khái niệm về 
//interation protocol là 1 giao thức giúp duyệt qua các phần tử bao gồm 2 protocol con
// interable protocol chỉ định 1 object có thể duyệt qua các phần tử
// interator protocol chỉ định cách duyệt qua các phần tử như thế nào
// xem thêm video ss14 136