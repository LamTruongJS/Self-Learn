//async function luôn luôn return về 1 promise
//Async - khai báo một hàm bất đồng bộ (async function someName(){...}).

//Tự động biến đổi một hàm thông thường thành một Promise.
//Khi gọi tới hàm async nó sẽ xử lý mọi thứ và được trả về kết quả trong hàm của nó.
//Async cho phép sử dụng Await
//Await - tạm dừng việc thực hiện các hàm async. (Var result = await someAsyncCall())

//Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
//Await chỉ làm việc với Promises, nó không hoạt động với callbacks.
//Await chỉ có thể được sử dụng bên trong các function async.

// Async function declaration
async function func1() {}
// Async function expression
const func2 = async function () {};
// Async arrow function
const func3 = async () => {};
// Async method definition in an object literal
const obj = { async say() {} };

// works
async function fetchData() {
  const data = await studentApi.getAll();
  console.log(data);
}

//async function luôn luôn return về 1 promise
async function getNumber() {
  return 10;
}
getNumber().then((n) => console.log(n));

///
async function getNumber() {
  return Promise.resolve(10);
}
getNumber();

// lấy dữ liệu
async function getAllStudent() {
  try {
    const url = 'http://js-post-api.herokuapp.com/api/students?_page=1';
    const response = await fetch(url); // tới đây thì đợi cho kết quả resolve
    const data = await response.json(); // xuống đây lại đợi tiếp

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllStudent();
//await còn đóng vai trò như là .then(), .catch() để handle cái promise nếu ko có await thì sẽ sinh ra lỗi
async function getData() {
  // return Promise.reject(new Error('tada, my error :P'))
  throw new Error('tada, my error :P');
}
async function main() {
  try {
    const data = await getData();
    // hoặc dùng cách dưới
    // const data = getData().catch((error) => console.log(error));
    // khi đã dùng cách này thì ko cần try... catch nữa
  } catch (error) {
    console.log(error);
  }
}
main();

// nếu bạn muốn các promise chạy cùng lúc thì dùng promise.all()
// nếu muôn chạy theo thứ tự thì dùng async await

function logger() {
  return Promise.resolve('Thành Công');
}
async function test() {
  console.log('a');
  const logger2 = await logger();
  console.log(logger2);
  setTimeout(async () => console.log('b'));
  console.log('c');
}
test();
