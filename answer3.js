// Your task is to write a function which returns
// the sum of following series upto nth term(parameter).

function SeriesSum(n) {
  return n.reduce((a, b) => a + b);
}
console.log(SeriesSum([1, 1 / 4])); // 1.25

// or
// function SeriesSum(n) {
//   var sum = 0;
//   for (var i = 0; i < n; i++) {
//     sum += 1 / (3 * i + 1);
//   }
//   return sum.toFixed(2);
// }
// console.log(SeriesSum(1, 1 / 4));
