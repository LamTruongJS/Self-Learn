// sự khác nhau giữ innerText, innerHTML, textContent
//Ta thấy innerHTML sẽ in ra nội dung text và những thẻ trong div này luôn.
//Còn textContent sẽ in ra nội dung text và nội dung các thẻ bên trong div này luôn.( kể cả những thẻ có display = none)
//Còn innerText sẽ in ra nội dung text, không in ra nội dung của thẻ ẩn( do thẻ span có display: none, cái này dùng để ẩn thẻ span này).

//innerText : là những gì thấy trên giao diện
//textContent: lấy những content của thẻ, kể cả thẻ bị ẩn
{
  /* <div>
  <h1>Xin chào</h1>
  <script>console.log(chào);</script>
</div>; */
}
// textContent: lúc này là bao gồm cả console.log(chào) và xin chào
//innerHTML: lấy ra các thẻ con, cả css, style

// thường dùng textContent để lấy nội dung và gán nội dung cho 1 thẻ nhất định, ko có phần tử con
// dùng innerHTML để gán String kèm đoạn mã HTML

//////ĐỌC THÊM....về XSS attack của innerHTML
// một số trường hợp bạn innerHTML dữ liệu từ server hoặc ở đâu đó vô tình có những đoạn script độc hại
// lúc này máy của bạn sẽ ngầm chạy những script độc hại đó vì thể trước khi dùng cần kiểm tra xem nguồn đó có độc hại hay ko
// hoặc sử dụng thư viện DOMPurity để nó lọc qua cái dữ liệu đó và trả về cho ta 1 dữ liệu an toàn
