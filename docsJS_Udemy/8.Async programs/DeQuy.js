// Đệ quy là trong hàm gọi lại chính hàm đó
//Để áp dụng đề quy cần lưu ý:
//1. Xác định điểm dừng
//2. Xử lí logic => Tạo ra điểm dừng (return)
//Dễ xảy ra lỗi tràng bộ nhớ vì số lượng công việc xếp vào callStack quá nhiều

function countDown(num) {
  if (num > 0) {
    console.log(num);
    return countDown(num - 1);
  }
  return num;
}
countDown(3);

// các bước chạy
//b1: chạy dòng 14 truyền num=3 lên dòng 7 thấy num > 3 chạy vào return countDown(3-1)
//b2: bắt đầu chạy từ dòng code 7 với countDown(2)
//b3: countDown(1)
//b4:countDown(0) => return num;

///////dùng đệ quy để duyệt mảng

function loop(start, end, array, callback) {
  if (start <= end) {
    callback(start, array);
    return loop(start + 1, end, array, callback);
  }
}

const array = ['JavaScript', 'Php', 'Ruby'];
loop(0, array.length - 1, array, function (index, array) {
  console.log('index: ', index, 'skill: ', array[index]);
});

////

function giaiThua(num) {
  if (number > 0) {
    return number * giaiThua(num - 1);
  }
  return 1;
}
console.log(giaiThua(3));
////Logic:
//tại dòng code 40:
//number =3 =>3 * giaiThua(2)
//number =2 =>2 * giaiThua(1)
//number =1 =>1 * giaiThua(0)
//number =0 => return 1;
// bắt đầu thực hiện tính toán: 1*1*2*3

function Sum(n) {
  let sum = 0;
  if (n < 0 || !Number.isNaN(n)) return;
  if (n % 2 === 0) {
    sum = (n + 1) * (n / 2);
  } else {
    let res = n - 1;
    sum = (res + 1) * (res / 2) + n;
  }
  return sum;
}
console.log(Sum(5));
