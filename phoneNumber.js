// create phone number by format

function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}

//Or//

function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")} ${numbers.slice(6).join("")}`;
}
console.log(createPhoneNumber([0, 7, 8, 9, 7, 6, 3, 2, 7, 0]));
