//JavaScript engine : là chương trình máy tính để thực thi js
// EcmaScript engine: như trên
// Complier: khi có 1 file js, nó sẽ Conplier toàn bộ ra hết mã máy rồi mới thực thi
// Interpreter : vừa complier vừa chạy(từng dòng, từng dòng)
// Just in time(JIT) complier : sự kết hợp của complier và Interpreter

//----------------------------------------------------------------//
// JavaScript engine bao gồm Memory Heap và Call Stack
// Memory Heap: là nơi lưu trữ dữ liệu dạng tham chiếu(object,function)
// Call Stack: là lưu trữ các dữ liệu còn lại
// javaScript engine: thực thi ngôn ngữ
// webApis: dom, setTimeOut,setInterVal,AJAX: tùy vào môi trường mà webAPI khác nhau, nodejs có webApi khác
// quy trình thực hiện even loop
// khi gọi 1 hàm nó sẽ được push vào call stack, sau khi thực hiện xong được pop ra khỏi Call stack
// khi thực thi mà gặp các webAPIs như setTimeOut, setInterVal, DOM, AJAX request,... nó sẽ đưa cho thằng WebApis
// khi thằng webAPIs làm xong mà có những callback cần thực thi thì nó sẽ đưa vô cho thằng Callback queque(xếp hàng theo thứ tự vô)
// thằng even loop run liên tục khi thấy Call Stack empty thì nó lấy thằng đầu tiên trong callback queque đưa lên Call Stack.

//----------------//

//Callback queque và promise queque (Macrotask và Microtask)
//promise queque(Microtask) : có độ ưu tiên cao hơn Callback queque(Macrotask) nên nó sẽ được ưu tiên thực hiện trước
// ví dụ:
console.log('a');
setTimeout(() => {
  console.log('b');
}, 0);
promise = new Promise((resolve, reject) => {
  resolve();
});
promise
  .then(() => {
    console.log('c');
  })
  .then(() => {
    console.log('d');
  });

console.log('e'); //a->e->c->d->b

//xem minh họa tại :https://www.jsv9000.app/
