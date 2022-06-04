// The company you work for has just been
// awarded a contract to build a payment gateway.
// In order to help move things along, you have
// volunteered to create a function that will take
// a float and return the amount formatting in dollars and cents.

function formatMoney(num) {
  return "$" + num.toFixed(2);
}
console.log(formatMoney(39.99));
