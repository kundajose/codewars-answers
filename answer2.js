//  Your task is to make a function
// that can take any non-negative integer as
//  an argument and return it with its digits in
//   descending order. Essentially, rearrange the
//    digits to create the highest possible number.

function descendingOrder(n) {
  return Number(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
console.log(descendingOrder(42145)); // 54421
// or
// function descendingOrder(n) {
//   return parseInt(String(n).split("").sort().reverse().join(""));
// }
// console.log(descendingOrder(42145));
