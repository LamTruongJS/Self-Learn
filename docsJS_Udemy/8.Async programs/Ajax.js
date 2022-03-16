//Ajax - Asynchronous JavaScript and XML
// giữa 2 server bât kì hoặc 2 hệ thống cần kì cần giao tiếp với nhau thì ta sử dụng API(RestApi)
// gửi tên server http request -> nhận lại http response dạng XML,JSON data
//http: Hypertext Transfer Protocol
//http : non secure : nghĩa là khi bạn nhắn tin nội dung tin nhắn được gửi đi nhiều tầng, khi ai bắt được gói tin đó thì đều có thể xem được nội dung tin nhắn
//https: secure: trước khi gửi đi nó sẽ được mã hóa, nên khi trong quá trình vận chuyển ai bắt được gói tin vẫn ko xem được, khi đến nơi thì mã hóa ngược lại ra tin nhắn
// http Apis là chuẩn giao tiếp dựa trên http

//GraphQL API là kiểu như client - server, cho phép bạn viết câu truy vấn trực tiếp ở client để lấy ra dữ liệu cần dùng, ko cần lấy hết
//Rest API: server định nghĩa ra 1 tập các api, rồi bạn lấy các api, có thể có nhừng flied bạn ko dùng nhưng vẫn phải gọi

//////Rest API
// cần thỏa các điều kiện sau:
// client-server : sử dụng Api -tạo Api
//stateless server : ko cần lưu trữ lại state, ko quan tâm bạn là ai,...
// cachable
//uniform interface: tập hợp các rules quy định cách đặt tên và sử dụng CRUD nào,...
//layered system

//////CRUD => create read update delete
// GET /students                        Get all students
// GET /students/:studentId             Get one student by id
// POST /students                       Add new student
// PUT /students/:studentId             Full update of a student
// PATCH /students/:studentId           Paritial update of a student
// DELETE /students/:studentId          Remove a student by id
