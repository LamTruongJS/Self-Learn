// mảng n chiều là mảng lồng mảng
const array = [1, 2, 3, [4, 5, 6, [7, 8, 9, 10], 11], 12];

const array2 = [1, 2, 3];
array2[8] = 10;
console.log(array2); //[ 1, 2, 3, <5 empty items>, 10 ]

array.flat(index); // làm phẳng mảng, index=0 ko làm, index =1 phẳng 1 tầng,.... và xóa cả phần tử rỗng

Array.isArray(array2); // kiểm tra xem có phải mảng ko

const set = new Set(['foo', 'bar', 'baz', 'foo']); // tạo mảng ko trùng lặp
console.log(set); // { "foo", "bar", "baz" } // dang object
const newarray = Array.from(set); // [ "foo", "bar", "baz" ] // dạng mảng
const newarray2 = set;
console.log(newarray);
console.log(newarray2);
Array.from(); // tạo mới mảng từ dữ liệu của set, interable,...

/////////////////////////////////////Nhóm hàm kiểm tra xem phần tử có tồn tại hay ko

const array = [1, 2, 3, 4, 'LamTruong', 1];
array.every((item, index) => item > 0); // kiểm tra toàn bộ có thoải điều kiện hay ko => True/False
array.some((item, index) => item > 0); //kiểm tra 1 phần tử có thoải điều kiện hay ko =>True/False
array.indexOf(1); // trả về vị trí đầu tiên xuất hiện, không tìm thấy trả về -1
array.lastIndexOf(1); // trả về vị trí cuối cùng xuất hiện,không tìm thấy trả về -1
array.includes(1); // kiểm tra sự tồn tại =>True/false
array.find((item, index) => item > 10); // trả về giá trị phần tử đầu tiên thỏa điều kiện nếu không thì undefined
array.findIndex((item, index) => item > 2); // trả về vị trí phần tử đầu tiên thỏa điều kiện nếu không trả về -1

/////////////////////////////////Nhóm hàm thêm, xóa phần tử

const array = [1, 2, 3, 4];

array.push(1, 10, 11); // thêm phần tử vào cuối mảng
array.pop(); // xóa phần tử cuối mảng
array.shift(); //xóa phần tử đầu mảng
array.unshift(1, 2, 3); //thêm phần tử vào đầu mảng
const array2 = array.slice(1, 2); // từ vị trí số 1 xóa đến phần tử số 2 và không bao gồm phần tử số 2 =>xóa ảo(vì không ảnh hưởng đến mảng đó)
array.splice(0, 1, 10, 11); // từ vị trí 0 xóa 1 phần tử, thêm 10,11 vào vị trí đã xóa => xóa thực( tác động trực tiếp lên mảng đó)
console.log(array);

///////////////////////////////////////////////////////Nhóm hàm hay dùng
const array = [1, 2, 3, 4];
array.forEach((item, index) => console.log(item)); // lặp qua mỗi phần tử và hàm này không có return

const newArray = array.map((item, index) => {
  return item * 3;
}); // tạo ra 1 mảng mới

const newArray = array.filter((item, index) => {
  return item > 2;
}); // lọc ra các phần tử thoải điều kiện ra 1 mảng mới
const array = [1, 10, 3, 4];
const newArray = array.reduce((acc, curr, currIndex, arr) => {
  //acc là giá trị khởi tạo ban đầu = innitialValue
  //curr là giá trị hiện tại không tính innitialValue
  //currIndex là index của curr hiện tại
  // arr là mảng đó

  acc.push(curr);
  return acc;
  // return acc.concat(curr)
}, []); // duyệt mảng và tính toán cho ra kết quả cuối cùng
console.log(newArray);

for (let item of array) {
  consol.log(item);
} // dùng for...of cho mảng và không lấy ra được index

//một số hàm khác

const array = [1, 2, 3, 4];
array.fill('*', 0, array.length); // điền  vào mảng từ stat -> end
array.join(''); // biến đổi mảng thành chuối
const array2 = [1, 2, 3];
array.concat(array2); // nối mảng
array.reverse(); // đảo ngược mảng
array.sort(); // sắp xếp mảng
array.flatMap(mapFn); // sự kết hợp giữa map() và flat()
console.log([20, 4, [2]].flatMap((x) => [x * 2])); // chỉ áp dụng được với mảng 2 chiều

//rest operator

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [first, second, third, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9] || array;
console.log(rest);

//Trước khi thao tác ta cần clone sang 1 mảng mới

// mô tả quy trình các bước thêm xóa đầu mảng
//ví dụ thêm 0 vào đầu mảng
[1, 2, 3];
[1, 2, 3, empty];
//dịch duyển mảng lùi về 1 ví trí, nhưng giá trị đầu mảng vẫn ko đổi
[1, 1, 2, 3][
  //sau đó mới thêm 0 vào vị trí đầu mảng
  (0, 1, 2, 3)
];

//=> thêm xóa ở đầu mảng tốn rất nhiều tài nguyên

//nếu 1 hàm nhận vào tham số mà có giá trị là 1 function thì tham số đó được gọi là callback()
function main(onFinish) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += i;
  }
  onFinish(sum); //callbackFn
}

function handleOnFinish(sum) {
  console.log('sum:', sum);
}
main(handleOnFinish); // chỉ cần truyền tên hàm

////////////////////////////xây dụng hàm find() với callbackFn
function findFistEven(numberList, callbackFn) {
  if (!Array.isArray(numberList)) return undefined;
  for (let i = 0; i < numberList.length; i++) {
    if (callbackFn(numberList[i]))
      //sử dụng callbackFn
      return numberList[i];
  }
  return undefined;
}

function isEven(number) {
  return number % 2 === 0;
}
findFistEven([1, 2, 3, 4], isEven); //cách 1
findFistEven([1, 2, 3, 4], (number) => number % 2 === 0); // cách 2

/////////////////////////////sort();

//null, undefined sẽ được đưa xuống cuối mảng
// nếu ko cung cấp compareFn() các phần tử được chuyển về string để tiến hành so sánh theo bảng mã ASCII
// nếu có compareFn(a,b)
// <0 : a trước b
// =0: a ,b như nhau
// >0 : a sau b

function compare(a, b) {
  return a - b;
}
[2, 1, 3].sort(compareFn);
[2, 1, 3].sort((a, b) => a - b);

/////////////////////////xây dựng hàm reduce()

//issue:
// arr should be an array and callbackFn should be function
// arr.length===0 and innitialValue === undefined --> throw error
// arr.length===0 and innitialValue !== undefined --> return innitialValue
// còn lại thì logic bình thường

function reduce(arr, callbackFn, innitialValue) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') throw new Error('invalid parameter');
  if (arr.length === 0 && innitialValue === 'undefined')
    throw new Error('Should have innitialValue when arr is empty');
  if (arr.length === 0 && innitialValue !== 'undefined') return innitialValue;

  const hasInitialValue = innitialValue !== 'undefined';
  const startIndex = hasInitialValue ? 0 : 1;
  let accumulator = hasInitialValue ? innitialValue : arr[0];

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callbackFn(accumulator, arr[i]);
  }

  return accumulator;
}

function calcSum(prevSum, number) {
  return prevSum + number;
}
console.log(reduce([2, 4, 6], calcSum, 0));

// ví dụ tìm max
const array = [1, 10, 11, 20, 19, 18];
array.reduce((acc, curr) => (acc > curr ? acc : curr));

// ví dụ tìm từ dài nhất

const array = ['a', 'b', 'ancd', 'aa'];
const maxString = array.reduce((acc, curr) => (acc.length > curr.length ? acc : curr));
console.log(maxString);
