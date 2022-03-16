//CSP- Content Security Policy: kiểu như là nó cho phép trang web của bạn chỉ được fetch đến nguồn dữ liệu an toàn
//ví dụ: bạn muốn load font thì chỉ load tại được nguôn này, load hình ảnh chỉ được load tại nguồn kia,...
// ví dụ ta cảm thấy file js tại trang A và B là an toàn thì ta chỉ được lấy của 2 trang đó, bất cứ add file nào đến trang khác đều bị báo lỗi
// ví dụ trang mozilla nó chỉ cho phép màn hình console fetch đến chính nó nếu bạn fetch đến trang khác nó sẽ báo lỗi

// CORS - Cross-Origin Resource Sharing: định nghĩa ra rules trên phía sever, cho phép API được gọi từ những domain nào
// ví dụ bạn đang ở domains A bạn gọi đến API ở domanin B
// trong thực tế API ở 1 sever khác và front_end ở 1 sever khác nên khi bạn gọi API có nghĩa là từ 1 domain này gọi lên 1 domain khác nên xãy ra tình trang CORS
// back_end có nhiệm vụ congfig CROS này

//Kết luận:
// CSP: cho phép bạn fetch dữ liệu từ những nơi an toàn
// CORS: back_end cho phép API sẽ được sử dụng từ những domain nào được phép gọi
