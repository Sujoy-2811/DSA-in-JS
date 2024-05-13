function last_Occurance(arr, key, i = 0) {
  if (i === arr.length) {
    return -1;
  }

  if (arr[i] === key) {
    return i;
  }

  return last_Occurance(arr, key, i + 1);
}

console.log(last_Occurance([2, 4, 2, 5, 6, 733, 4443], 342));
