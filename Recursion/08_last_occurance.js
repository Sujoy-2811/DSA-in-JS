function last_Occurance(arr, key, i = 0) {
  if (i === arr.length) {
    return -1;
  }
  let isFound = last_Occurance(arr, key, i + 1);

  if (isFound === -1 && arr[i] === key) {
    return i;
  }

  return isFound;
}

console.log(last_Occurance([2, 4, 2, 5, 6, 733, 4443], 2));
console.log(last_Occurance([2, 2, 2, 2, 2, 2], 2));
