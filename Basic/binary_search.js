const arr = [4, 5, 7, 11, 15, 18, 22, 45];
const key = 21;

function reverseArray(arr, key) {
  let start = 0,
    last = arr.length - 1;

  while (start <= last) {
    let mid = Math.floor((start + last) / 2);
    if (arr[mid] == key) return mid;
    if (arr[mid] > key) last = mid - 1;
    else start = mid + 1;
  }
  return -1;
}

console.log("index of " + key + " is " + reverseArray(arr, key));
