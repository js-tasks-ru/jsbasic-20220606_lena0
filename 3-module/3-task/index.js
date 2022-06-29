function camelize(str) {
  let arr = str.split("");
  let result;
  arr.forEach(function(item, index, array) {
    let indexOfHyphen = arr.indexOf('-');
    let indexOfCapitalLetter = indexOfHyphen + 1;
    let indexOfFirstLetter = 0;
    arr[indexOfHyphen] = '';
    arr[indexOfCapitalLetter] = arr[indexOfCapitalLetter].toUpperCase();
    arr[indexOfFirstLetter] = arr[indexOfFirstLetter].toLowerCase();
  });
  return result = arr.join("");
}
