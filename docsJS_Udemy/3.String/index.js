const course = 'Lập Trình JavaScript';

console.log(course[0]); // lấy kí tự tại vị trí
course.charAt(index); //Lấy ký tự tại vị trí index

course.concat(str, ...strN); //Nối chuỗi
console.log(course.concat(course, 'Tại Đây', ' '));

course.includes(searchString, position); //Có chứa chuỗi nào đó hk?
console.log(course.includes('JavaScript', 0)); // trả ra true || false

course.startsWith(searchString, length); //Có bắt đầu với chuỗi searchString?
console.log('JavaScript'.startsWith('Ja'));

course.endsWith(searchString, length); //Có kết thúc bằng chuỗi searchString?
console.log('JavaScript'.startsWith('pt'));

course.indexOf(searchValue, fromIndex); //Vị trí đầu tiên có searchValue
console.log('JavaScript'.indexOf('J')); // => 0

course.lastIndexOf(searchValue, fromIndex); //Vị trí cuối cùng có searchValue
console.log('JavaScript'.lastIndexOf('a')); // => 3

course.match(regexp); //Liên quan tới regular expresion (tạm bỏ qua)

course.matchAll(regexp); //Liên quan tới regular expresion (tạm bỏ qua)

course.padStart(targetLength, padString); //Thêm vào đầu string
console.log(course.padStart(20, '*')); //tự động thêm * vào đầu chuỗi, sao cho chuỗi đủ 20 kí tự
course.padEnd(targetLength, padString); //Thêm vào cuối string

course.repeat(count); //Nhân chuỗi hiện tại lên count lần

course.replace(searchFor, replaceWith); //Thay thế chuỗi searchFor đầu tiên bằng replaceWith

course.replaceAll(searchFor, replaceWith); //Thay thế tất cả chuỗi searchFor bằng replaceWith

course.slice(beginIndex, endIndex); //Lấy chuỗi con
// beginIndex < endIndex;
console.log('JavaScript'.slice(0, 3)); // =>'Jav'
console.log('javascript'.slice(-3, -1)); // =>  console.log('javascript'.slice(7, 9)) => ip

course.substring(indexStart, indexEnd); //Lấy chuỗi con
// không cho phép số ấm
// làm việc như slice
// nếu indexEnd > indexStart tự động đảo ngược 2 số cho nhau
console.log('JavaScript'.substring(4, 0)); // =>'Java'

course.split(sep, limit); //Tách chuỗi thành mảng các chuỗi con dựa vào sep
console.log('javascript'.split(''));
console.log('javascript'.split('ava'));
console.log('javascript'.split(' '));

['javascript', 'php'].join('-'); // nối mảng thành chuỗi

course.trim(); //Bỏ khoảng trắng
course.trimStart(); //Bỏ khoảng trắng đầu string
course.trimEnd(); //Bỏ khoảng trắng cuối string
course.toLowerCase(); //Chuyển chuỗi thành chữ viết thường
course.toUpperCase(); //Chuyển chuỗi thành chữ viết hoa

// \u2026 => kí tự 3 dấu chấm
console.log('\u2026');

console.log('javascript'.replace('ja', ''));
