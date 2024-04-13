const arr = [4, 5, 7, 11, 15, 18, 22, 45];
const key = 21;

function reverseArray(arr) {
  const newArr = [...arr];
  let start = 0,
    last = newArr.length - 1;

  while (start < last) {
    const temp = newArr[start];
    newArr[start] = newArr[last];
    newArr[last] = temp;
    start++;
    last--;
  }
  return newArr;
}

console.log(arr);
console.log(reverseArray(arr));
