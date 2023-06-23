let a = 6;
let b = 9;
a++;
console.log(a + b);
console.log(a - b);
console.log(b / a);
console.log(a ** 2 * b);
console.log(b % a);
console.log(`${a} + ${b}`);
console.log('a' + b);
console.log(b + false);
console.log(null + a);
console.log(a + true + ' b');
console.log(a + undefined);
console.log(a - a);
console.log(2 > 1);
console.log(7 <= 9);
console.log(5 == 1);
console.log(15 != 7);
console.log(7 > 7);
console.log('я' < 'Я');
console.log('торт' >= 'тон');
console.log('075' == 12);
console.log('075' == 75);
console.log('05' === 5);
console.log('тара' === 'тара');
console.log(null == undefined);
console.log(null == 0);
console.log(null == false);
console.log(1 === true);
console.log(true == 1);
console.log('Лавка' === undefined);
// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?');
// if (year == 2015) {
//   alert('Вы правы!');
//   alert('Вы такой умный!');
// }
// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?');
// if (year < 2015) {
//   alert('Это слишком рано...');
// } else if (year > 2015) {
//   alert('Это поздновато');
// } else {
//   alert('Верно!');
// }
// let accessAllowed;
// let age = prompt('Сколько вам лет?');
// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }
// alert(accessAllowed);
// let accessAllowed = age > 18 ? true : false;
let year = prompt('В каком году создали интернет?');
if (year < 1969) {
  alert('Это рано...');
} else if (year > 1969) {
  alert('Это поздно');
} else {
  alert('Верно!');
}

if (age < 3) {
  message = 'Здравствуй, малыш!';
} else if (age < 18) {
  message = 'Привет!';
} else if (age < 100) {
  massage = 'Здравствуйте!';
} else {
  massage = 'Какой необычный возраст!';
}
