function getMinMax(inputData) {
  let arr = inputData.split(' ');
  let newArr = [];
  let newObj = {};
  let minNum;
  let maxNum;
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      newArr.push(Number(arr[i]));
      minNum = Math.min(...newArr);
      maxNum = Math.max(...newArr);
    }
  }
  newObj.min = minNum;
  newObj.max = maxNum;
  return newObj;
}
