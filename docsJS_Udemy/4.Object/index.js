const student = {
  id: 1,
  name: 'Lâm Trường',
  isHerro: true,
  'avg mark': 9,
};

console.log(student.name);
console.log(student['avg mark']); // 9
// console.log(student.avg mark) //syntax Error

const key = 'avg mark';
console.log(student.key); //undefined
//khi key là 1 giá trị phụ thuộc cần phải gọi như sau
console.log(student['key']); //9

//thêm key mới vào Object
student.age = 21;
student['status'] = 'single';
console.log(student);
// xóa key
delete student.name;

// tham trị :Primitive Type/ Value Type --- boolean, number, string,null,undefined,symbol --- chứa giá trị
// tham chiếu: Reference Type --- Object,array,function -- chỉ chứa địa chỉ của vùng nhớ

//so sánh 2 object nếu cả 2 cùng trỏ về 1 địa chỉ thì =>true
//Nếu 2 object có giá trị giống nhau như khác địa chỉ thì  =>false

//đối với tham trị thì giá trị vẫn không bị thay đổi
// thường thì không nên thay đổi parameter
function changePrimitiveType(title, age) {
  title = 'lamTruong';
  age = 19;
}
title = 'Hope';
age = 20;
changePrimitiveType(title, age);
console.log(title); //Hope;
console.log(age); //20;

//tham chiếu thì giá trị bị thay đổi
function changeReference(student) {
  student.name = 'TEDsHope';
}
changeReference(student);
console.log(student.name); //TEDsHope

///////////////////

const name = 'LamTruong';
const age = '21';
const person = {
  name,
  age,
};
const { ten, tuoi } = person;

// kiểm tra sự tồn tại của key trong obect

console.log('name' in person); //true
console.log('status' in person); //false

///////////////////////////clone Object

const student = {
  class: '12C2',
};
const person = {
  name: 'LamTruong',
};

const cloneObject = Object.assign({}, student, person);

const cloneObject2 = {
  ...student,
  ...person,
};

/////chú ý khi clone Object chỉ clone được 1 tầng

const student = {
  class: '12C2',
  mark: {
    English: 10,
  },
};
const cloneObject = {
  ...student,
};
cloneObject.mark.English = 1;
console.log(student.mark.English); // 1 => chưa clone thành công vì English đã bị thay đổi theo

const cloneObject2 = {
  ...student,
  mark: {
    ...student.mark,
  },
};

// việc tạo ra mark như trên có ý nghĩa ghi đè vào mark ban đầu vì trùng key
cloneObject.mark.English = 1;
console.log(student.mark.English); //10 => clone thành công

// tham khảo thư viện immerjs hỗ trợ việc clone nhiều tầng

const keyList = Object.keys(student); // lấy ra key của 1 object => trả về mảng
const valueList = Object.values(cloneObject); // lấy ra value => trả về mảng

// duyệt qua key của 1 object dùng for...in
const student = {
  name: 'truong',
  class: '12',
};
for (let key in student) {
  console.log(key);
  console.log(student[key]); // lấy ra được value
}
// kiểm tra object rỗng
Object.keys(student).length === 0;
