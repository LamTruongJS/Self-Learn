// sau mỗi time thực hiện 1 lần
const intervalID = setInterval(callback, time);
clearInterval(intervalID);
// có thể dùng clearTimeout(intervalID);
console.log('1');
const intervalID = setInterval(() => {
    console.log('intervalID');
}, 1000);
console.log('2');