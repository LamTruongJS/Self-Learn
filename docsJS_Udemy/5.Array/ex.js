// viết hàm tạo ra các số trong khoảng [a...b];
function createArrayInRange(a, b) {
    // your code here
    let array = [];
    if (a >= b) return -1;
    for (let i = a + 1; i < b; i++) {
        array.push(i);
    }
    return array;
}
console.log(createArrayInRange(1, 5));

//kiểm tra số nguyên tố
function isPrime(n) {
    if (n < 0 || n >= 1000) return -1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(19))

//liệt kê ước số của số nguyên dương n
function getDivisorList(n) {
    let array = [];
    if (n < 0 || n > 1000) return -1;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            array.push(i);
        }
    }
    return array;
}
console.log(getDivisorList(10));

// kiểm tra số hoàn hảo: là số có tổng các ước só bằng nó, không tính chính nó

function isPerfectNumber(n) {
    let array = [];
    if (n < 0 || n >= 1000) return -1;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            array.push(i);
        }
    }
    return array.reduce((acc, curr) => acc + curr, 0) === n;
}
console.log(isPerfectNumber(6));

//biến đổi mảng f(i) = f(i-1)+ f(i+1);
// nghĩa là giá trị của nó bằng tổng của giá trị trước và giá trị sau
// [2,4,6,8] = [4,8,12,6]
function transformNumbers(numberList) {
    const newArray = numberList.map((number, index) => {
        if (index === 0) return numberList[index + 1];
        if (index === numberList.length - 1) return numberList[index - 1];
        return numberList[index - 1] + numberList[index + 1];
    });
    return newArray;
}
console.log(transformNumbers([2, 4, 6, 8]));

//kiểm tra xem mảng có chứa số nguyên tố không, in ra vị trí và giá trị của nó

function hasPrime(numberList) {
    if (numberList.length <= 0) return -1;
    let newArray = [];
    let indexArrray = [];
    numberList.forEach((number, index) => {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return newArray;
        }
        indexArrray.push(index);
        return newArray.push(number);
    })
    console.log(indexArrray);
    console.log(newArray);
}
hasPrime([2, 3, 4]);


// trung bình cộng số chẵn trong mảng
function calcAvgOfAllEvenNumbers(numberList) {
    if (numberList.length <= 0) return -1;
    let sum = 0;
    const newArray = numberList.filter((number, index) => {
        return number % 2 === 0;
    })
    newArray.forEach(number => sum += number);
    return Math.round(sum / newArray.length);
}
console.log(calcAvgOfAllEvenNumbers([1, 2, 4, 8]));

// kiểm tra các phần tử trong mảng có phải đều là số hoàn hảo không
function isAllPerfectNumbers(numberList) {
    const AmountNumber = numberList.reduce((acc, curr) => {
        res = 0;
        for (let i = 1; i < curr; i++) {
            if (curr % i === 0) {
                res += i;
            }
        }
        return res === curr ? acc + 1 : acc;
    }, 0)
    return AmountNumber === numberList.length;
}
console.log(isAllPerfectNumbers([4, 6]));