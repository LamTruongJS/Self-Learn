// tìm 1 phần từ
const element = document.getElementById('abc'); // chỉ có thể dùng cho document
document.querySelector('');
element.querySelector(''); // có thể dùng cho element

// tìm nhiều phần tử
document.querySelectAll('');
document.getElementsByClassName('');
document.getElementsByTagName('');
document.getElementsByTagNameNS('');
// lưu ý: tính chất No live của querySelectAll('');
// - khi sử dụng querySelectAll(''); nếu Element có bổ sung thêm phần tử sau khi gọi querySelectAll(''); giá trị trong querySelectAll(''); ko được thay đổi
const a = document.querySelectorAll('.abc'); // ví dụ có 3 phần từ class=abc;
// sau đó ta tạo thêm 1 phần từ class=abc nữa
// lúc này biến a vẫn trả về 1 mảng 3 phần tử mà thôi

document.querySelector('input[type=checkbox]:checked:not(:disabled)');
