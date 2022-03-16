// promise sinh ra để giải quyết vấn đề callback hell
// callback hell: hàm callback lồng hàm callback lồng hàm callback....

// khi tạo ra promise --> trạng thái pending
// gồm có :
//resolve() --> trạng thái fullfilled -> .then()
//reject() --> trạng thái  rejected -> .catch()

//Promise(function()) --> cần truyền vào function
const promise = new Promise((resolve, reject) => {});
console.log(promise);

// resolve(data)  truyền vào dữ liệu gì thì then nó bắt được dữ liệu dạng đó
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Dữ liệu nè'), 1000);
});
promise.then((result) => console.log(result)); // 'dữ liệu nè'

//reject() // tạo lỗi dùng new Error
const promise = new Promise((resolve, reject) => {
  reject(new Error('Lỗi rồi nè'));
});
promise.catch((err) => console.log(err));

// finally()// dù thành công hay thất bại vẫn nhảy vào
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('thành công'));
});
promise
  .then((result) => console.log('resolve', result))
  .catch((err) => console.error(err))
  .finally(() => console.log('vẫn nhảy vào nè'));
//lưu ý: thường finally dùng để ẩn cái loadding... data dù cho có call api thành công hay thất bại

// các phương thức

Promise.resolve(value); // return ra giá trị truyền vào khi thành công
Promise.reject(new Error('Lỗi')); // return ra lỗi truyền vào khi thất bại
Promise.all(); // đợi đất cảc promise chạy xong rồi trả về nếu có 1 thăng reject thì trả về thất bại
Promise.allSettled(); //đợi tất cả các promise chạy xong rồi trả về kết quả của từng promise( vừa có reject vừa có resolve)
Promise.any(); // đợi 1 thằng chỉ cần nó fullfilled(resolve) thì trả về thằng đó
Promise.rance(); // đợi thằng đầu tiên dù có fullfilled hay rejected thì vẫn trả về kết quả của nó

// ví dụ Promise.all([promiseA, promiseB]) // nhận vào 1 mảng các promise
// ví dụ này có reject nên nó chỉ trả về kết quả thất bại mặc dù có thằng resolve()
// ví dụ này nếu ko có thằng C thì sau 3s nó trả về resolve()
const promiseA = new Promise((resolve) => {
  setTimeout(() => {
    resolve('AAA');
  }, 3000);
});
const promiseB = Promise.resolve('BBB');
const promiseC = Promise.reject(new Error('Lỗi C rồi nè'));
Promise.all([promiseA, promiseB, promiseC])
  .then(([resultA, resultB, resultC]) => {
    console.log(resultA, resultB, resultC);
  })
  .catch((err) => console.log(err));

// ví dụ Promise.allSettled([promiseA, promiseB]) // nhận vào 1 mảng các promise
// sau 3s nó sẽ trả về kết quả của từng promise mặc dù có thằng reject
const promiseA = new Promise((resolve) => {
  setTimeout(() => {
    resolve('AAA');
  }, 3000);
});
const promiseB = Promise.resolve('BBB');
const promiseC = Promise.reject(new Error('Lỗi C rồi nè'));
Promise.allSettled([promiseA, promiseB, promiseC])
  .then(([resultA, resultB, resultC]) => {
    console.log(resultA, resultB, resultC);
  })
  .catch((err) => console.log(err));

// ví dụ về promise.any() : đợi chỉ cần 1 thằng fullfilled thì nó trả về thằng đó
//nodeJS chưa hỗ trợ bản này nên cần chạy trên trình duyệt mới xem được
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
const promises = [promise1, promise2, promise3];
Promise.any(promises).then((value) => console.log(value));

// ví dụ về promise.rance()
const promise1 = Promise.reject(new Error('Lỗi nè'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
const promises = [promise1, promise2, promise3];
Promise.any(promises)
  .then((value) => console.log(value))
  .catch((err) => console.log(err));

//////Promise Chaining: giải quyết vấn đề callback hell
Promise.resolve(5)
  .then((n) => n * 2)
  .then((n) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(n * 2), 1000);
    });
  })
  .then((n) => {
    const finalNumber = n + 10;
    console.log(finalNumber);
    return finalNumber;
  })
  .catch((err) => console.error(err));
