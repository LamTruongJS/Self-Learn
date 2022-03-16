// type conversion(dùng hàm để ép kiểu)--Explicit Conversion, Type corecion (ép kiểu tự động)
//Truthy và falsy
//falsy: false, 0, emptyString, null, undefined,NaN,document.all(đặc biệt--ít dùng)
//Truthy là những gì còn lại

// so sánh kí tự dựa vào bảng ASCII
// thường là kí tự thường lớn hơn kí tự hoa, kí tự lớn hơn số
// ví dụ 'a' > 'A' ; 'aA' >'a'; true(1) > false(0) ; 'b'>'a';
//không so sánh 2 object
// so sánh khác kiểu dữ liệu, js sẽ tự động chuyển chúng về dạng number để so sánh
// null chỉ == undefined
// null == undefined => true ; nul=== undefined => false
// nul == 0 => false; null >= 0 =>true
