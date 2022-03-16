//API là chuẩn giao tiếp giữa 2 hệ thống với nhau(client-server).

//HTTP API là chuẩn giao tiếp thông qua HTTP để 2 hệ thống có thể nói chuyện với nhau.

//HTTPS giúp mình bảo mật gói tin trên đường truyền internet, trong khi HTTP thì sẽ được truyền đi dạng plain/text. Dễ bị tấn công middleman.

//REST API là chuẩn giao tiếp client-server (cùng một số đặc điểm khác) giúp mình có được một số quy tắc nhất định trong việc quy định về resource, method để client và server có thể "nói chuyện" được với nhau.
//Về nguyên tắc đơn giản,

//- Client: gửi một HTTP Request lên server

//- Server: sau khi nhận được request sẽ xử lý và trả về một HTTP Response

//fetch(url, init)
// init là 1 object
//fetch là 1 promise
// fetch luôn là 1 fullfilled  chỉ trừ trường hợp server trả về 1 network error
// với các trường hợp server trả về 4xx, 5xx thì fetch vẫn hiểu nó là fullfilled
fetch(url, init);
url = 'http:....';
init = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer YOU_TOKEN_HERE', // token type: Bearer // YOU_TOKEN_HERE là giá trị token nhận được trước đó
  },
  body: JSON.stringify({ name: 'LamTruong' }),
};
//header có nhiều loại
// nhưng thường dùng là Content-Type và Authorization
//Authorization: kiểu giống 1 giấy phép cho bạn, lúc đến server nó biết bạn là ai
// khi bạn làm việc với quá trình đăng nhập, nếu đăng nhập thành công vào server nó trả về 1 token,
// sử dụng token đó đính kèm vào trong request của mình, để nhửng request sau bạn gửi lên server phải có header là Authorization

// GET, DELETE thường ko có body
// PUT, POST,PATCH đi kèm boddy

//Content-Type: có các loại
// application/json : thường là dùng cái này
// multipart/from-data : dùng để push ảnh, upload file
// application/x-www-form-urlencoded : thường ít dùng nhất

fetch(url, {
  method: 'POST',
  header: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer YOU_TOKEN_HERE',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json()) // chuyển sang json
  .then((data) => console.log(data));

////// khắc phục trường hợp fetch luôn nhận fullfilled với lỗi 4xx và 5xx
// khắc phục bằng response.ok -- chỉ nhận với 2xx thì chạy, còn lại là catch
fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    if (response.ok) return response.json();

    // tùy vào lỗi bạn muốn trả về. ví dụ dưới đây là trả về data.message
    return response.json().then((data) => {
      throw new Error(data?.message || 'Something went wrong');
    });
  })
  .catch((err) => console.error(err));
