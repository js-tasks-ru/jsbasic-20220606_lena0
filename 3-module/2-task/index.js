function filterRange(arr, a, b) {
  let newArr = [];
  arr.filter(function(item, index, array) {
    if (item >= a && item <= b) {
      newArr.push(item);
    } else {
      return [];
    }
  });
  return newArr;
}
