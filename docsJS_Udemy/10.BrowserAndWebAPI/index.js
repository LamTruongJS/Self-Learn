// browser là chương trình hiển thị nội dung website và trên đó có những cái link mình có thể đi qua web khác
// www/w3/web: là hệ thống website bao gồm nhiều web page
// Cross browser testing : là tính đảm bảo tính năng chạy hoạt đông được trên nhiều trình duyệt

//Vendor prefix
// -webkit- Chrome, Safari, newer versions of Opera, all iOS browsers, ...
// -moz- Firefox
// -o- pre-webkit versions of Opera
// -ms- Internet Explorer and Microsoft Edge
// bây h hầu như ko cần quan tâm đến những thức trên

// browser engines
// mỗi trình duyệt có 1 engines khác nhau
// ví dụ: webkit của Apple -- safari browser
//        Blink của google -- google chrome và Edge, Opera
//        Gecko của mozilla -- firefox browser
//        .....

// Cấu trúc của 1 Browser ( Browser Component)
//1 User Interface ------Address Bar, Home, Back buttons, ...
//2 Browser Engine ------Receive action from UI, then works with Storage + Rendering Engine
//3 Rendering Engine -------Display requested content (HTML/CSS), or more (pdf, xml) with plugins
//4 Networking Component -------Handle network tasks (HTTP, WebSocket, WebRTC)
//5 Javascript Engine -------Javascript Engine (V8, SpiderMonkey, ...)
//6 UI Backend -------- Used for drawing everything (UI + in the rendering engine), use OS interface(checkbox, dropdown, ...)
//7 Data Storage -------Used for persisting data locally (http cookies, browser caching, web storage: localstorage, session storage and IndexedDB)

//quá trình rendering Engine:
// HTML và CSS -> HTML parse và CSS parse --> DOM Tree và Style rules ->  Render Tree ->layout(kích thước) hoặc paint --> Display
// quá trình này là render từng phần,parse xong cái nào thì render cái đó, chứ ko có parse hết rồi mới render

//webAPI là tập hợp cái api mà trình duyệt cung cấp
