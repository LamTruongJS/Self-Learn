//ECMAScript được bắt nguồn từ tổ chức ECMA international
// là tổ chức phi lợi nhuận có nhiều tiêu chuẩn nhưng cần chú ý tiêu chuẩn ECMA 262(JS), ECMA 404 (JSON), ECMA 402 (API)
// TC39 là nhóm chuyên gia phụ trách cho ECMAScript
// Các bảng ECMAScript thường được cập nhập vào tháng 6 hằng năm kể từ 2015

// NHóm TC39 process cần thực hiện qua 5 bước: để public 1 feature
// b1:strawman(ý tưởng)
// b2: proposal(chuẩn bị demo để minh họa, bổ sung cho ý tưởng)
// b3: draf(tiến hành contribute cho ý tưởng để hoàn chỉnh hơn)
// b4: candidate(gần như hoàn chỉnh, chỉ cần xem xét bổ sung vài ý nhỏ nếu có)
// b5: finished(hoàn thành và sẵn sàng update)

// chi tiết bảng cập nhật

// ES2015(ES6) -ES2016(ES7): includes(), Math.pow(x,y)

// ES2016 -ES2017: asnyc function, MAJOR shared memory and atonimics,
//str.padStart(), str.padEnd(), Object.values(), Object.entries(), Object.getOwnPropertyDescriptor(),
//Trailing commas in function parameter lists and calls

//ES2017- ES2018:rest, spread cho Object(Trước đó chỉ có Array),Promise.finally(), for await of
// ví dụ về for await of: dùng để fetch API( ví dụ gọi nhiều API nhưng ta muốn chúng thực thi đồng bộ)
async function fetchData() {
  const studentList = [];
  const pageList = [1, 2, 3, 4];
  for await (const page of pageList) {
    const url = `http://js-post-api.herokuapp.com/api/students?_page=${page}`;
    console.log('----------------------------');
    console.log('Start:', new Date().getTime(), url);

    const response = await fetch(url);
    const responseJSON = response.json();

    studentList.push(responseJSON.data);
    console.log('End', new Date().getTime(), studentList);
  }
}
fetchData(); //chạy code để hiểu hơn

//ES2018-ES2019: arr.flat(index),arr.flatMap(mapFN), Object.fromEntries(), str.trimStart(), str.trimEnd(),Symbol.prototype.description, option catch binding, arr.sort(), function toString()
//ES2019-ES2020:
//BigInt: hỗ trợ cộng những số mà kết quả lớn hơn Number.Max_SAFE_INTERGER
const blance = BigInt('9007199254740991'); // truyền vào số bạn muốn cộng
blance + 2n; // cộng thêm 2 vào số đó
// Dynamic import: dùng chỗ nào thì import vào chỗ đó
const math = await import('./math.js');
//Nullish Coalesing
//const value = x ?? ''; // khác null và undefined
//Option Chaining
//obj?.pros kiểm tra xem obj có bị null hoặc undefined ko, nếu ko có thì ko gây ra lỗi chỉ in ra undefined
//Promise.allSelect(),String.prototype.matchAll, globalThis, Model Namspace Export, for in, import.meta

//ES2020-ES2021:
// ||=, &&=., ??=
x ||= y; // nếu x falsy thì x=y
x &&= y; // nếu x truthy thì x=y
x ??= y; // nếu x là null hoặc undefined thì x=y

//Numeric separator
//const x = 1_000_000;

//str.replaceAll();
//promise.any();
//promise.race();
