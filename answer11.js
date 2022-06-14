// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  return str
    .split(" ")
    .map((e) => e.substr(1) + e[0] + "ay")
    .join(" ");
}
console.log(pigIt("Pig latin is cool"));
