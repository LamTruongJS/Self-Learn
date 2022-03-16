element.remove();
element.removeChild(); // xóa 1 thằng con
element.innerHTML = ''; // không nên vì nó sẽ tạo ra 1 lần trigger parse HTML
element.textContent = ''; // nên dùng
