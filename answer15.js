// Every number may be factored in prime factors.

// For example, the number 18 may be factored by its prime factors 2 and 3

function multPrimefactorSum(a, b) {
  return [...Array(b - a + 1).keys()].map((v) => v + a).filter(check);
}

function check(n) {
  let N = n,
    sum = 0;
  while (n % 2 === 0) (sum += 2), (n /= 2);

  for (let i = 3; i ** 2 <= n; i++) while (n % i === 0) (sum += i), (n /= i);

  if (n > 2) sum += n;

  return N % sum === 0 && sum !== N;
}
console.log(multPrimefactorSum(10, 100) == [16, 27, 30, 60, 70, 72, 84]);

console.log(multPrimefactorSum(1, 60) == [1, 4, 16, 27, 30, 60]);
