// Given two arrays array1 and array2 write array1 function comp(array1,array2) (orcompSame(array1,array2))
//that checkswhether the two arrays have the "same" elements, with the
//same multiplicities (the multiplicity of array1 member is the number
//of times it appears). "Same" means,here, that the elements in
//array2 are the elements in array1 squared, regardless of the order or array1 is squareroot of array1.
const comp = (a1, a2) => {
  if (!a1 || !a2 || a1.length !== a2.length) return false;
  return (
    a1
      .map((x) => x * x)
      .sort()
      .toString() === a2.sort().toString()
  );
};
console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 0, 361, 25921, 361, 20736, 361]
  )
); // true

// or
// function comp(array1, array2) {
//   if (array1 == null || array2 == null) return false;
//   array1.sort((a, b) => a - b);
//   array2.sort((a, b) => a - b);
//   return array1.map((v) => v * v).every((v, i) => v == array2[i]);
// }
// console.log(
//   comp(
//     [121, 144, 19, 161, 19, 144, 19, 11],
//     [121, 14641, 0, 361, 25921, 361, 20736, 361]
//   )
// );
