// unique number

// function findUniq(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[0] == arr[1] ? arr.pop() : arr[0];
// }

//Or//

function findUniq(arr) {
  if (arr[0] !== arr[1] && arr[2] !== arr[1]) {
    return arr[1];
  } else if (arr[0] !== arr[1] && arr[2] === arr[1]) {
    return arr[0];
  } else {
    return arr.filter((x) => x !== arr[0])[0];
  }
}
console.log(findUniq([0, 8, 9, 5, 8, 9, 7, 6, 3, 2, 7, 0]));
