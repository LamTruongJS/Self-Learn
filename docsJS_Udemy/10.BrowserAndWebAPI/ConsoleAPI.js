console.log();
console.info();
console.debug();
console.warn();
console.error();

console.assert(1 === 2, 'sai mới log nè!');
console.count(); // đến
console.count('LamTruong'); //LamTruong: 1
console.count('LamTruong'); //LamTruong: 2
console.countReset('LamTruong'); //resert count

//đếm thời gian cái hàm thực hiện
console.time('loop'); //bắt đầu
console.timeLog('loop'); // tại đây thì ghi nhớ thời gian
console.timeEnd('loop'); // kết thúc

console.time('loop');
for (let i = 0; i < 10; i++) {
  console.timeLog('loop');
}
console.timeEnd('loop');

// gom nhóm log
console.group('TODO ADD');
console.log('Before', { title: 'easy' });
console.log('After', { id: 1, title: 'easy' });
console.groupEnd();
// hoặc nhóm
console.group('TODO ADD');
console.log('Before', { title: 'easy' });
console.log('After', { id: 1, title: 'easy' });
console.groupEnd();

// kiểm tra xem cái log đó được gọi bơi thằng nào
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}
foo();

console.table();
console.table({
  id: 1,
  name: 'Alice',
  age: 18,
  isHero: true,
});
console.table({
  id: 1,
  name: 'Alice',
  age: 18,
  isHero: true,
});

///style cho console.log()
console.log('Web come to %cLamTruong', 'font-size:20px; color:red');

console.clear();
