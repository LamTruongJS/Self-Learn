//JavaScript là single-thread: tại 1 thời điểm chỉ thực hiện được 1 task
//tuy nhiên js có 1 cơ chế giúp chúng ta chạy đồng thời nhiều task tại 1 thời điêm :))))

//sync: đồng bộ(đợi từng công việc)
//async: bất đồng bộ(thực hiện cùng 1 lúc)
// ví dụ nếu chạy đồng bộ thì lúc lấy api, chúng ta chỉ được ngồi đợi, ko làm được gì trong thời gian đó.
// js là single-thread nhưng có thể thực hiện nhiều task cùng 1 lúc thì nó có cơ chế even loop, nó đưa những
// task nặng(tốn thời gian) ra worker thread làm việc, sau khi làm xong thì đưa về main-thread
// sync thường xảy ra trường hợp block: xử lí những task quá nặng sẽ tốn khá nhiều thời gian để người dùng ngồi chờ


window.alert();
window.confirm();
window.prompt();
// khi chạy 3 thằng trên thì trình duyệt sẽ chạy tới rồi dừng, khi nào active xong được chúng thì mới chạy được những cái code sau