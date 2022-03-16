// site storage là là nơi lưu trữ các origin
// mỗi trang web có 1 origin

//local storage và sessionStorage là kiểu dữ liệu string

// sự khác nhau:
// local storage: cho nhiều tab, tắt trình duyệt vẫn còn
// sessionStorage chỉ có 1 tab, nếu bạn tắt tab đó thì dữ liệu bị mất

const student = {
  name: 'LamTruong',
};
localStorage.setItem('student', JSON.stringify(student)); // đưa vào localStorage
JSON.parse(localStorage.getItem('student')); //lấy ra
localStorage.removeItem('student'); //xóa
// khi dùng tab ẩn danh thì nó cũng ko có lưu được localStorage nếu tắt tab thì dữ liệu cũng mất
