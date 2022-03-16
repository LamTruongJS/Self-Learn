beforeunload; // sự kiện hỏi trước khi reload
function logger(e) {
  e.stopPropagation(); // chặn sự kiện nổi bọt
  e.preventDefault(); // chặn sự kiện mặt định thường dùng cho submit ngăn chặn reload
}

const handleClick = () => {
  console.log('a');
};
element.addEventListener('click', handleClick);
element.removeEventListener('click', handleClick);

// có 3 phase : capturing, target, bubbling
// capturing: là quá trình đi từ cha xuống event đó
// target: là sự target vào chính event đó
// bubbling: là quá trình nổi bọt từ con lên cha

event.target; // trả ra event mà mình target vào
event.currentTarget; // lúc này nó sẽ trả ra thằng cha của cái event đó
event.eventPhase; // kiểm tra xem đang ở phase nào
event.stopPropagation; // hủy sự kiện nổi bọt
event.stopImmediatePropagation; // ngăn chặn sự kiện nổi bọt đồng thời dừng các addEventListener khác của chính nó, được cài đặt thêm sau đó

// cách chặn các action mặc định của trình duyệt
// ví dụ chặn link thẻ a
{
  /* <a href="http://google.com" onclick="return false;">Không chạy được </a> */
}

//c1: dùng return false // dùng cho các thẻ
//c2: dùng event.preventDefault() : chỉ dùng với addEventListener thường là với form

addEventListener('input', function () {}); //sự kiện input này nhập tới đâu tìm tới đó
