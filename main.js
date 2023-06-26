// function calc(a, b, operation) {
//   if (operation === 'sum') {
//     console.log(a + b);
//   } else if (operation === 'min') {
//     console.log(a - b);
//   } else if (operation === 'mul') {
//     console.log(a * b);
//   } else if (operation === 'del') {
//     console.log(a / b);
//   }
// }
// calc(5, 3, 'sum'); //8
// calc(9, 3, 'min'); //6
// calc(2, 5, 'mul'); //10
// calc(4, 2, 'del'); //2

function calc2(a, b, operation) {
  switch (operation) {
    case 'sum':
      console.log(a + b);
      break;
    case 'min':
      console.log(a - b);
      break;
    case 'mul':
      console.log(a * b);
      break;
    case 'del':
      console.log(a / b);
      break;
  }
}
calc2(8, 1, 'sum');
calc2(7, 5, 'min');
calc2(3, 3, 'mul');
calc2(6, 3, 'del');
