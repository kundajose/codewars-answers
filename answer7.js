// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

// const deleteNth = (a, x) => {
//   let m = {};
//   return a.filter((v) => (m[v] = m[v] + 1 || 1) <= x);
// };
// console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3]));

// or
function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}
console.log(
  deleteNth(
    [4, 15, 49, 49, 49, 4, 4, 15, 48, 15, 15, 15, 4, 4, 48, 4, 48, 15, 15, 48],
    3
  )
);
