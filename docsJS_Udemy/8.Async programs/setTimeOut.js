// thực thi 1 hàm sau khoảng thời gian
const timeoutID = setTimeout(callback, timeout); // timeout is milliseconds
clearTimeout(timeoutID); // clear timeout
// có thể dùng clearInterval(timeoutID);
function logger() {
  //do something
}
logger; // tên function
logger(); // lời gọi hàm
setTimeout(logger, 1000);

// ví dụ về setTimeout

console.log('1');
setTimeout(() => {
  console.log('2');
}, 0);
console.log('3'); //1,3,2
// trình tự thực hiện theo even loop
// b1: phát hiện ra console.log1 cho vào call stack
// b2: phát hiên setTimeout đưa vào khu vực web APIs
// b3: chờ setTimeout thực hiện xong đưa nó vào khu vực Callback queque
// b4: phát hiện ra console.log3 cho vào call stack
// b5: xem thử call stack đã trống hay chưa(nghĩa là xem thử còn lệnh nào chưa thực thi không)
// nếu trống thì mới cho dữ liệu trong khu vực Callback queque vào Call stack
//setTimeout() luôn được chạy sau cùng

/////////////////////////////////////Debounce Technique//////////////////////////
// là kĩ thuật của setTimeout
// đợi xem trong 1 khoảng thời gian xác định sự kiện đó có xảy ra lần nào nữa không,
// nếu không thì nó mới acitve actions, nếu sự kiện đó xảy ra trong khoảng thời gian đó thì nó vẫn đứng đợi
// function nhận vào 2 tham số: callback và time chờ và ngoài ra có 1 option nữa
//option này có thể là biến để truyền vào hoặc là thời gian(tìm hiểu thêm)
//cách cài đặt cơ bản nhất
function logger() {
  console.log('data');
}

function debounce(callback, wait) {
  let timeOutID;
  const demo = () => {
    if (timeOutID) {
      clearTimeout(timeOutID);
    }
    timeOutID = setTimeout(callback, wait);
  };
  return demo;
} //clourse

const debounceLog = debounce(logger, 500);
debounceLog(); // thằng này chạy
debounceLog(); // phát hiện thêm thằng này nên hệ thống chờ
debounceLog(); // lại phát hiện => khi không còn phát hiện thì nó log

// thư viện lodash hỗ trợ debounce
// npm i lodash.debounce
import debounce from 'lodash.debounce';

function log() {
  console.log('data');
}
const debounceLog = debounce(log, 500);
debounceLog();
debounceLog();

//tham khảo thêm tại https://redd.one/blog/debounce-vs-throttle

/////////////////////////////////////Throttle Technique/////////////////////////////////////
// thường dùng kèm sự kiện scroll
// ví dụ scroll tới đâu thì lấy dữ liệu tới đó
// nếu dùng debounce thì scroll dừng mới tiến hành lấy dữ liệu
// khi dừng scroll mới trigger cái even : là debounce
// trong quá trinh scroll cũng có trigger cái even những nó được hạn chế số lần so với mặc định
// trong khoảng thời gian đợi đó chỉ trigger đúng 1 lần
function logger() {
  console.log('data');
}

function throttle(callback, wait) {
  let isThrottling = false;
  const demo = () => {
    if (isThrottling) return;
    isThrottling = true;
    setTimeout(() => {
      callback();
      isThrottling = false;
    }, wait);
  };
  return demo;
}
const throttleLog = throttle(logger, 500);
throttleLog(); // start => isThrottling = true
throttleLog(); // ignore
throttleLog(); //ignore
throttleLog(); //ignore
setTimeout(throttleLog, 400); //ignore
setTimeout(throttleLog, 500); //start => isThrottling = true
setTimeout(throttleLog, 600); //ignore
setTimeout(throttleLog, 700); //ignore
setTimeout(throttleLog, 800); //ignore
setTimeout(throttleLog, 900); //ignore
setTimeout(throttleLog, 1100); //start => isThrottling= true

// thư viện lodash cũng hỗ trợ throttle
// tham khảo thêm tại https://redd.one/blog/debounce-vs-throttle

////kết luận
// kĩ thuật debounce là kĩ thuật nhận biết trigger trong 1 time wait nếu không thấy trigger trong 1 time wait thì nó sẽ thực hiện công việc
// áp dụng cho keyonChange, spam click
// kĩ thuật throttle là kĩ thuật nhận biết trigger trong 1 time wait, trong 1 khoảng time wait nó chỉ thực hiện công việc 1 lần
// áp dụng cho scroll để load dữ liệu
// cần ghi nhớ cách xây dựng hàm, trong thực tế thường dùng thư viện lodash

/////////////////////////////////////setTimeout với this/////////////////////////////////////////
// không thể bind this cho setTimeout
// this trong callback function của setTimeout default là global object(window)
const student = {
  name: 'LamTruong',
  sayHello() {
    console.log('Name', this.name);
    console.log('THIS', this);
  },
};
student.sayHello(); // this là student
setTimeout(student.sayHello); // this là window
// 2 kết quả trên ra kết quả khác nhau
// cách khắc phục
setTimeout(() => {
  student.sayHello();
}, 0);
//hoặc
setTimeout(student.sayHello.bind(student), 0);

//////lưu ý:
// Trước khi dùng this chúng ta cần console.log(this) ra để xem trước
// khi dùng object định nghĩa 1 funtion thì nên dùng normal function ko nên dùng arow function nếu có sử dụng từ khóa this
// khi dùng setTimeout thì nên dùng arrow function để nhận 1 funtion như ở ví dụ trên khi có từ khóa this

/////////////////////////// ví dụ về debounce với click//////////////////////////////////////////
function logger() {
  console.log('click');
}

function debounce(callback, wait) {
  let timeoutID;
  return function () {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(callback, wait);
  };
}
const debounceLog = debounce(logger, 1000);
let temp = document.querySelector('.click');
temp.onclick = function () {
  debounceLog();
};

////////////////////////////////////// ví dụ về throttle với click/////////////////////
function logger() {
  console.log('click');
}

function throttle(callback, wait) {
  let isThrottling = false;
  return function () {
    if (isThrottling) return;
    isThrottling = true;
    setTimeout(() => {
      callback();
      isThrottling = false;
    }, wait);
  };
}
const throttleLog = throttle(logger, 1000);
let temp = document.querySelector('.click');
temp.onclick = function () {
  throttleLog();
};
