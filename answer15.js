function firstNonRepeatingLetter(s) {
  var x = s.replace(" ", "");
  for (var i = 0; i < x.length; i++) {
    if (x.charCodeAt(i) < 96) {
      var y = x.replace(x[i], "");
      var z = String.fromCharCode(x.charCodeAt(i) + 32);
      if (y.indexOf(x[0]) > -1 || y.indexOf(z) > -1) {
        continue;
      } else {
        var m = x[i];
      }
      return m;
    } else if (x.charCodeAt(i) > 96) {
      var y = x.replace(x[i], "");
      var z = String.fromCharCode(x.charCodeAt(i) - 32);
      if (y.indexOf(x[0]) > -1 || y.indexOf(z) > -1) {
        continue;
      } else {
        var m = x[i];
      }
      return m;
    }
  }
}
console.log(firstNonRepeatingLetter("stress"));
