const a = [24, 24, 5, 7, 11, 1];

console.log(a);

function countingSort(arr) {
  let largest = -Infinity;
  let countArr = [];
  let res = [];

  //find largest no.
  for (let i = 0; i < arr.length; i++) {
    largest = Math.max(largest, arr[i]);
  }
  // set count array
  for (let i = 0; i < arr.length; i++) {
    if (countArr[arr[i]]) {
      countArr[arr[i]] += 1;
    } else {
      countArr[arr[i]] = 1;
    }
  }
  for (let i = 0; i < countArr.length; i++) {
    while (countArr[i] > 0) {
      res.push(i);
      countArr[i] -= 1;
    }
  }
  return res;
}
console.log(countingSort(a));
