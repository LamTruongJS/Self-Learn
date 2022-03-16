// 1e6 =1 000 000
//1e-4 = 0.0001
// +"112" =123 :number hoặc -"123"=-123

Number.EPSILON; // khoảng cách nhỏ nhất giữa 2 số
Number.NaN; //not a number

Number('123'); //123
Number.parseInt('1.5'); //1
Number.parseFloat('1.5'); //1.5

Number.parseInt('1.2a'); //1
Number.parseFloat('1.2a'); //1.2

Number(null); //0
Number(undefined); //NaN
Number.NEGATIVE_INFINITY // số âm vô cùng
//chuyển từ number sang string
//làm tròn sau dấu thập phân
const n = 123.56;
n.toFixed(0); //124
n.toFixed(1); //"123.6"

//làm tròn từ trái sang phải
n.toPrecision(); // toString() // 123.56
1-- > 100
n.toPrecision(1); //100
n.toPrecision(2); //120
n.toPrecision(3); //123
n.toPrecision(4); //123.6
n.toPrecision(5); //123.56
n.toPrecision(7); //123.560

//Math  chỉ dành cho number ko dành cho bigint
Math.PI;
Math.SQRT2;

Math.abs(n); // trị tuyệt đối
Math.cell(n); // làm tròn trên
Math.floor(n); //làm tròn xuống
Math.round(n); // làm tròn bình thường
Math.trunc(n); //lấy phần nguyên
Math.random(); //0->1
Math.random() * n; // random khoảng từ 0->n
Math.pow(x, y); // hàm lũy thừa x^y //x**y
Math.sqrt(n); //căn bậc 2

// Để so sánh 2 số thực ta cần làm tròn toFixed() rồi mới so sánh
// 2 số thực gọi là bằng nhau khi độ chênh lệch của chúng nhỏ hơn Epsilon
const n = 12.1213;
if (n.toFixed() === (n + Number.EPSILON).toFixed(2)) {
    console.log('đúng');
}
else console.log('sai');
//random số ngẫu nhiên [a,b]
// bài này là cách làm tổng quát
function randomNumberInRange(a, b) {
    //issue:
    // min a:
    // range: b-a
    // ex: [10,100] => range 90
    if (a >= b) return -1;
    const random = Math.random();
    const result = random * (b - a);
    return Math.round(result) + a;

    //step:
    // 0.1 -> 0.1 * (100-10) = 9 + 10 -> 90
    // 0.002 -> 0.01 * (100-10) = 0.9 + 10 -> 11
}

// tìm kí tự lớn nhất trong 1 số
function getMaxDigit(n) {
    if (n < 0 || n >= 1000) return -1;
    let max = 0;
    // your code here
    if (n.toString().length === 1) return n;
    if (n.toString().length === 2) {
        const firstDigit = Math.trunc(n / 10);
        const secondDigit = n % 10;
        if (firstDigit > secondDigit) return firstDigit;
        else return secondDigit;
    } else {
        const firstDigit = Math.trunc(n / 100);
        const secondDigit = Math.trunc(n / 10) % 10;
        const thirdDigit = n % 10;
        max = firstDigit;
        if (secondDigit > max && secondDigit > thirdDigit) return secondDigit;
        if (thirdDigit > max && secondDigit < thirdDigit) return thirdDigit;
    }
    return max;
}
console.log(getMaxDigit(2));

console.log(22 / 10);