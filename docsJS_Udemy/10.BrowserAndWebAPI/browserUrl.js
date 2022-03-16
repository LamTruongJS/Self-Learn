// URI : uniform resource identifier bao gồm
// URN : uniform resource name
// URL: uniform resource location vd: http://facebook.com
//Cấu trúc của 1 URL:
// https: là scheme hoặc protocol(giao thức)
//http: ko bảo mật, ai bắt được gói tin thì xem được toàn bộ thông tin
//https: bảo mật, mã hóa gói tin trước khi đưa đi
// wwww.example.com : domain name (shop.whois.com để mua domain)
// domain name thường đi kèm với hosting
// được hiểu là domain name là địa chỉ nhà, hosting là 1 server nào đó trên thế giới, khi bạn mua domain nó sẽ trõ về cho bạn đúng hosting của mình
// :80: port
// /path/path : path to the file
// ?key=value1&key2=value2 : parameter
// #SomewhereIntheDocument :anchor: liên kết với trang nào đó của mình

//https://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#somewhereintheDocument

const url = new URL('https://ezfrontend.com/blog?page=1&limit=10#title');
console.log(url);
// tách url của bạn ra nhiều phần, bạn có thể log ra rồi xem mà dùng

// trong đó có 2 thuộc tính là
// search: '?page=1&limit=10',
// searchParams: URLSearchParams
// search trả về 1 string các parameter
// searchParams trả về là 1 object ta có thể sử dụng

const params = new URLSearchParams('?_page=1&_limit=10');
params.get('_page'); // 1
params.get('_limit'); // 10
params.get('_order'); // null

params.set('_page', 2); // ghi đè
params.toString(); // _page=2&_limit=10

params.append('_page', 3); // thêm vào
params.toString(); // _page=2&_limit=10&_page=3

params.has('_page'); // true
params.has('_order'); // false

////// object location
window.location; // trả về url hiện tại
window.location.reload(); //reload trang
window.location.href; // trả về full url trên trình duyệt
window.location.href = 'url'; //chuyển hướng trang nhưng ko nên dùng cách này
window.location.assign('url'); // đi đến trang nào đó có thể quay lại
window.location.replace('url'); //đi đến trang mới không thể quay lại
window.history.back(); // quay lai trang trước đó
window.history.forward(); // tới trang lúc trước khi quay lại

// thao tác trên url: thường dùng cho fillter để gán nó lên url để render lần sau nó vẫn giữ được dữ liệu
const url = new URL(window.location);
url.searchParams.set('title', 'lamtruong');
window.history.pushState({}, '', url);
